export type BPMNNodeType = 'startEvent' | 'endEvent' | 'userTask' | 'serviceTask' | 'exclusiveGateway'

export interface BPMNNode {
  id: string
  name: string
  type: BPMNNodeType
}

export interface BPMNFlow {
  id: string
  source: string
  target: string
  condition?: string
}

export interface BPMNWorkflow {
  processName: string
  tasks: BPMNNode[]
  flows: BPMNFlow[]
}


/*
{
    "processName": "Invoice Approval",
    "tasks": [
      { "id": "start", "name": "Start", "type": "startEvent" },
      { "id": "submitInvoice", "name": "Submit Invoice", "type": "userTask" },
      { "id": "approveInvoice", "name": "Approve Invoice", "type": "userTask" },
      { "id": "gateway", "name": "Approval Decision", "type": "exclusiveGateway" },
      { "id": "end", "name": "End", "type": "endEvent" }
    ],
    "flows": [
      { "id": "flow1", "source": "start", "target": "submitInvoice" },
      { "id": "flow2", "source": "submitInvoice", "target": "approveInvoice" },
      { "id": "flow3", "source": "approveInvoice", "target": "gateway" },
      { "id": "flow4", "source": "gateway", "target": "end", "condition": "Approved" }
    ]
  }
*/
  