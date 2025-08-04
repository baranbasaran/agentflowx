import { APIGatewayProxyHandlerV2 } from 'aws-lambda'
import { getStructuredWorkflow } from '../lib/llm'

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  try {
    const body = JSON.parse(event.body || '{}')
    const prompt = body.prompt

    if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing or invalid "prompt" in request body.' }),
      }
    }

    const workflow = await getStructuredWorkflow(prompt)

    return {
      statusCode: 200,
      body: JSON.stringify(workflow),
      headers: { 'Content-Type': 'application/json' },
    }

  } catch (err) {
    console.error('Error in /generate:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    }
  }
}
