import { AxiosResponse } from 'axios';
import { StoreCardInfo } from '../types/store';
import { fetchInstance } from './instance';
import { PagingDataResponse } from '../types/response';

export async function getLikedStore(token: string | null, cursor: number) {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<StoreCardInfo>>>(`/stores/like?cursorId=${cursor}`, {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });

  return response.data.data;
}
