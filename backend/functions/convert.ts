import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { BPMNWorkflow } from '../types/bpmn'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    const workflow: BPMNWorkflow = body.workflow

    if (!workflow) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Workflow is required.' }),
      }
    }

    // TODO: Implement actual BPMN XML conversion
    const xml = `<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL">
      <bpmn:process id="${workflow.processName}">
        ${workflow.tasks.map(task => `<bpmn:${task.type} id="${task.id}" name="${task.name}" />`).join('')}
        ${workflow.flows.map(flow => `<bpmn:sequenceFlow id="${flow.id}" sourceRef="${flow.source}" targetRef="${flow.target}" />`).join('')}
      </bpmn:process>
    </bpmn:definitions>`

    return {
      statusCode: 200,
      body: JSON.stringify({ xml }),
    }

  } catch (error) {
    console.error('Error in /convert:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    }
  }
}