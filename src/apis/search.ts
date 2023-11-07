import { AxiosResponse } from 'axios';
import { StoreCardInfo } from '../types/store';
import { fetchInstance } from './instance';
import { PagingDataResponse } from '../types/response';

export async function getSearchedStore(
  searchString: string | null,
  cursor: number,
): Promise<StoreCardInfo[]> {
  const response = await fetchInstance.get(`/search?q=${searchString}&c=${cursor}`);

  return response.data.response;
}

export async function getPopularStores() {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<StoreCardInfo>>>('stores/popular?cursor=10000&cursoid=10000');
  return response.data.data.body;
}
