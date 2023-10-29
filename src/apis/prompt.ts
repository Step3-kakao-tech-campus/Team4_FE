import { fetchInstance } from './instance';

export async function createPrompt(
  storeId: number,
  reviewId: number,
  prompts: { [key: string]: number },
) {
  return fetchInstance.post(`/stores/${storeId}/reviews/${reviewId}/create-prompt`, prompts);
}
