import { StoreCardInfo } from '../types/store';
import { fetchInstance } from './instance';

export async function getLikedStore(
  cursor: number,
  limits: number,
): Promise<StoreCardInfo[]> {
  const response = await fetchInstance.get(`/mypage/liked-store?cursor=${cursor}&limits=${limits}`);
  return response.data.response;
}
