import { AxiosResponse } from 'axios';
import { StoreCardInfo } from '../types/store';
import { fetchInstance } from './instance';
import { PagingDataResponse } from '../types/response';

export async function getSearchedStore(
  searchString: string,
  cursor: number,
) {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<StoreCardInfo>>>(
    `/stores/search?sort=id&q=${searchString}&cursor=${cursor}&cursorid=${cursor}`,
  );

  return response.data.data;
}

export async function getPopularStores() {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<StoreCardInfo>>>(
    'stores/popular?cursor=10000&cursoid=10000',
  );

  return response.data.data.body;
}

export async function getSimilarStores(token: string | null) {
  return fetchInstance.get<AxiosResponse<StoreCardInfo[]>>('stores/similar', {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });
}
