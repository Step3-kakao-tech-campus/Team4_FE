import { StoreCardInfo } from '../types/store';
import { fetchInstance } from './instance';

export async function getRecentlyViewdStore(
  cursor: number,
  limits: number,
): Promise<StoreCardInfo[]> {
  const response = await fetchInstance.get(`/mypage/recent-stores?cursor=${cursor}&limits=${limits}`);
  return response.data.response;
}
