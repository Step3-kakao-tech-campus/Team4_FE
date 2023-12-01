import { fetchInstance } from './instance';

export async function createPrompt(
  storeId: number,
  reviewId: number,
  prompts: { [key: string]: number },
) {
  return fetchInstance.post(`/stores/${storeId}/reviews/${reviewId}/create-prompt`, prompts);
}

export async function getPrompt(
  promptId: number,
): Promise<{ [key: string]: number }> {
  const response = await fetchInstance.get(`/prompt/${promptId}`);
  return response.data.response;
}
