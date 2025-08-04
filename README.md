# AgentFlowX - BPMN Diagram Generator

A serverless backend application that generates BPMN (Business Process Model and Notation) diagrams from natural language prompts using AI.

## 🚀 Features

- **Natural Language Processing**: Convert freeform text prompts into structured workflow JSON
- **BPMN Generation**: Transform structured JSON into valid BPMN XML format
- **Serverless Architecture**: Built with AWS Lambda and Serverless Framework
- **TypeScript**: Full TypeScript support for type safety and better development experience
- **Local Development**: Complete local development setup with serverless-offline

## 📋 Prerequisites

- Node.js 18.x or higher
- AWS CLI configured (for deployment)
- Serverless Framework CLI

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd agentflowx
   ```

2. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

## 🔧 Configuration

Create a `.env` file in the `backend` directory:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here

# AWS Configuration (optional for local development)
AWS_REGION=eu-north-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key

# Environment
NODE_ENV=development
```

## 🏃‍♂️ Local Development

### Start the local development server

```bash
cd backend
npm run start
```

This will start the serverless offline server, typically at `http://localhost:3000`.

### Available endpoints

- `POST /generate` - Convert natural language to structured JSON
- `POST /convert` - Convert structured JSON to BPMN XML

## 📦 Deployment

### Deploy to AWS

```bash
cd backend
npm run deploy
```

### Deploy to production

```bash
cd backend
npm run deploy:prod
```

## 🧪 Testing

### Run tests

```bash
cd backend
npm test
```

### Test endpoints locally

```bash
# Test generate endpoint
curl -X POST http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt": "Create a simple order processing workflow"}'

# Test convert endpoint
curl -X POST http://localhost:3000/convert \
  -H "Content-Type: application/json" \
  -d '{"workflow": {"tasks": [...], "flows": [...]}}'
```

## 📁 Project Structure

```
agentflowx/
├── backend/
│   ├── functions/
│   │   ├── generate.ts      # POST /generate endpoint
│   │   └── convert.ts       # POST /convert endpoint
│   ├── lib/
│   │   ├── llm.ts           # AI/LLM integration
│   │   └── jsonToBpmnXml.ts # JSON to BPMN conversion
│   ├── types/
│   │   └── bpmn.ts          # TypeScript type definitions
│   ├── serverless.yaml      # AWS Lambda configuration
│   └── package.json
└── README.md
```

## 🔌 API Reference

### POST /generate

Converts a natural language prompt into structured workflow JSON.

**Request:**
```json
{
  "prompt": "Create a simple order processing workflow"
}
```

**Response:**
```json
{
  "workflow": {
    "tasks": [
      {
        "id": "task1",
        "name": "Receive Order",
        "type": "userTask"
      }
    ],
    "flows": [
      {
        "id": "flow1",
        "from": "start",
        "to": "task1"
      }
    ]
  }
}
```

### POST /convert

Converts structured workflow JSON into BPMN XML format.

**Request:**
```json
{
  "workflow": {
    "tasks": [...],
    "flows": [...]
  }
}
```

**Response:**
```json
{
  "xml": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>..."
}
```

## 🛡️ Security

- Environment variables are used for sensitive configuration
- AWS IAM roles are configured for minimal required permissions
- Input validation is implemented on all endpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the [Issues](https://github.com/your-username/agentflowx/issues) page
2. Create a new issue with detailed information about your problem
3. Include your environment details and error messages

## 🗺️ Roadmap

- [ ] Frontend UI for diagram visualization
- [ ] Real-time collaboration features
- [ ] Advanced BPMN elements support
- [ ] Integration with popular BPMN tools
- [ ] Multi-language support
- [ ] Template library
- [ ] Export to various formats (PNG, SVG, PDF)

## 🙏 Acknowledgments

- Built with [Serverless Framework](https://www.serverless.com/)
- Powered by [AWS Lambda](https://aws.amazon.com/lambda/)
- TypeScript support for better development experience 