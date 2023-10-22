import { fetchInstance } from './instance';
import { CoinRechargeInfo, CoinUsageInfo } from '../types/coin';

export async function getChargeCoin(
  cursor: number,
  limits: number,
): Promise<CoinRechargeInfo[]> {
  const response = await fetchInstance.get(`/mypage/charge-coin?cursor=${cursor}&limits=${limits}`);
  return response.data.response;
}

export async function getUsageCoin(
  cursor: number,
  limits: number,
): Promise<CoinUsageInfo[]> {
  const response = await fetchInstance.get(`/mypage/usage-coin?cursor=${cursor}&limits=${limits}`);
  return response.data.response;
}
