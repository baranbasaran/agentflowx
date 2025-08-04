# 🧱 Backend Development Roadmap – BPMN App (Sprint 1)

## 🎯 Goal
Build the backend of a BPMN diagram generator:
- Accept a freeform prompt
- Generate structured JSON
- Convert JSON to BPMN XML
- Test both endpoints locally

---

## 📁 Project Structure

```
/backend
├── /functions
│   ├── generate.ts         # POST /generate
│   └── convert.ts          # POST /convert
├── /lib
│   ├── llm.ts              # LangChain/OpenAI or mocked logic
│   └── jsonToBpmnXml.ts    # JSON → BPMN XML logic
└── serverless.yaml         # AWS Lambda configuration
```

---

## ✅ Tasks

### 🧩 Task 1: Project Setup
- [ ] Init `/backend` with `npm init`
- [ ] Add TypeScript config (`tsconfig.json`)
- [ ] Install dependencies: `serverless`, `aws-sdk`, `dotenv`, `axios`
- [ ] Create folders: `/functions`, `/lib`

---

### 🧩 Task 2: Configure Serverless
- [ ] Create `serverless.yaml` with:
  - Runtime: `nodejs18.x`
  - Two functions: `generate`, `convert`
  - HTTP POST routes
  - Local development (`serverless-offline`)
- [ ] Create `.env` for secrets (OpenAI API key, etc.)

---

### 🧩 Task 3: Implement POST /generate
- [ ] File: `/functions/generate.ts`
- [ ] Accepts `{ prompt: string }`
- [ ] Calls `getStructuredWorkflow()` in `llm.ts`
- [ ] Returns structured JSON
- [ ] Add error handling

---

### 🧩 Task 4: Implement `llm.ts`
- [ ] File: `/lib/llm.ts`
- [ ] Function: `getStructuredWorkflow(prompt: string): WorkflowJSON`
- [ ] Return mocked output (e.g., hardcoded JSON structure)
- [ ] Ready to plug in LangChain later

---

### 🧩 Task 5: Implement POST /convert
- [ ] File: `/functions/convert.ts`
- [ ] Accepts `{ workflow: WorkflowJSON }`
- [ ] Calls `jsonToBpmnXml(workflow)` in `jsonToBpmnXml.ts`
- [ ] Returns `{ xml: string }`

---

### 🧩 Task 6: Implement `jsonToBpmnXml.ts`
- [ ] File: `/lib/jsonToBpmnXml.ts`
- [ ] Input: structured JSON
- [ ] Output: valid BPMN XML string
- [ ] Ensure format includes process, tasks, flows

---

### 🧩 Task 7: Unit Tests (Vitest or Jest)
- [ ] Test `getStructuredWorkflow()` (mocked)
- [ ] Test `jsonToBpmnXml()` (assert valid XML format)
- [ ] Optional: test Lambda handlers with sample events

---

### 🧩 Task 8: Local Testing
- [ ] Run `serverless offline start`
- [ ] POST to `/generate` with sample prompt
- [ ] POST to `/convert` with structured JSON
- [ ] Validate BPMN XML output

---

## 📦 Sprint 1 Deliverable
A working backend that:
- Accepts prompt and returns workflow JSON
- Converts workflow JSON to BPMN XML
- Fully testable via local serverless setup

---

## ⏭️ Next Sprints
- Plug in real LangChain or OpenAI API
- Add request validation
- Rate limiting and logging
- Frontend integration and UI/UX