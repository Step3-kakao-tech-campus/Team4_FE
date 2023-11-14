import { fetchInstance } from './instance';

export async function createPrompt() {
  return fetchInstance.post('gpt/order');
}

export async function getPrompt(
  promptId: number,
): Promise<{ [key: string]: number }> {
  const response = await fetchInstance.get(`/prompt/${promptId}`);
  return response.data.response;
}
