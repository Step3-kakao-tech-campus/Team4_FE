import { StoreCardInfo } from '../types/store';
import { fetchInstance } from './instance';

export async function getSearchedStore(
  searchString: string | null,
  cursor: number,
): Promise<StoreCardInfo[]> {
  const response = await fetchInstance.get(`/search?q=${searchString}&c=${cursor}`);

  return response.data.response;
}
