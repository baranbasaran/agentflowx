import { BPMNWorkflow } from '../types/bpmn'

export function jsonToBpmnXml(workflow: BPMNWorkflow): string {
  // TODO: Implement proper BPMN XML generation
  return `<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL">
    <bpmn:process id="${workflow.processName}">
      ${workflow.tasks.map(task => `<bpmn:${task.type} id="${task.id}" name="${task.name}" />`).join('')}
      ${workflow.flows.map(flow => `<bpmn:sequenceFlow id="${flow.id}" sourceRef="${flow.source}" targetRef="${flow.target}" />`).join('')}
    </bpmn:process>
  </bpmn:definitions>`
}