import { BPMNWorkflow } from '../types/bpmn'


export async function getStructuredWorkflow(prompt: string): Promise<BPMNWorkflow> {
  // TODO: Replace this mock with real LangChain/OpenAI logic
  return {
    processName: "Invoice Approval",
    tasks: [
      { id: "start", name: "Start", type: "startEvent" },
      { id: "submitInvoice", name: "Submit Invoice", type: "userTask" },
      { id: "approveInvoice", name: "Approve Invoice", type: "userTask" },
      { id: "gateway", name: "Approval Decision", type: "exclusiveGateway" },
      { id: "end", name: "End", type: "endEvent" }
    ],
    flows: [
      { id: "flow1", source: "start", target: "submitInvoice" },
      { id: "flow2", source: "submitInvoice", target: "approveInvoice" },
      { id: "flow3", source: "approveInvoice", target: "gateway" },
      { id: "flow4", source: "gateway", target: "end", condition: "Approved" }
    ]
  }
}
