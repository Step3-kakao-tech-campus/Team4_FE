import { AxiosResponse } from 'axios';
import { StoreCardInfo } from '../types/store';
import { fetchInstance } from './instance';

export async function getLikedStore(token: string | null) {
  return fetchInstance.get<AxiosResponse<{
    userId: number;
    storeList: StoreCardInfo[];
  }>>('/stores/like', {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });
}
