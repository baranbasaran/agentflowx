import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { getStructuredWorkflow } from '../lib/llm'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    // Parse request body
    const body = JSON.parse(event.body || '{}')
    const prompt = body.prompt

    // Validate input
    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid prompt input.' }),
      }
    }

    // Call LLM service (mocked or real)
    const workflow = await getStructuredWorkflow(prompt)

    return {
      statusCode: 200,
      body: JSON.stringify(workflow),
    }

  } catch (error) {
    console.error('Error in /generate:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error.' }),
    }
  }
}
