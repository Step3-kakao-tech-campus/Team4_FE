import { fetchInstance } from './instance';
import { CoinRechargeInfo } from '../types/coin';

export async function getChargeCoin(
  cursor: number,
  limits: number,
): Promise<CoinRechargeInfo[]> {
  const response = await fetchInstance.get(`/mypage/charge-coin?cursor=${cursor}&limits=${limits}`);
  return response.data.response;
}
