import { BPMNWorkflow, NODE_TYPES } from '../types/bpmn'
import { ChatOpenAI } from '@langchain/openai'
import { z } from 'zod'
import { StructuredOutputParser } from 'langchain/output_parsers'

const BPMNNodeTypeEnum = z.enum(NODE_TYPES)

const model = new ChatOpenAI({
  modelName: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
  temperature: process.env.OPENAI_TEMPERATURE || 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY,
})

const nodeTypes = ['startEvent', 'endEvent', 'userTask', 'serviceTask', 'exclusiveGateway'] as const
const bpmnSchema = z.object({
  processName: z.string(),
  tasks: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: BPMNNodeTypeEnum,
  })),
  flows: z.array(z.object({
    id: z.string(),
    source: z.string(),
    target: z.string(),
    condition: z.string().optional(),
  })),
})


const parser = StructuredOutputParser.fromZodSchema(bpmnSchema)

export async function getStructuredWorkflow(prompt: string): Promise<BPMNWorkflow> {
  const formatInstructions = parser.getFormatInstructions()

  const fullPrompt = [
    {
      role: 'system',
      content: `You are a BPMN workflow planner. 
Generate clean structured JSON that represents a business process. Only respond with valid JSON.`,
    },
    {
      role: 'user',
      content: `${prompt}\n\n${formatInstructions}`,
    },
  ]

  const response = await model.call(fullPrompt)
  return parser.parse(response.content)
}
