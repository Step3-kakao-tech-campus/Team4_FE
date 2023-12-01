import { AxiosResponse } from 'axios';
import { fetchInstance } from './instance';
import { CoinRechargeInfo, CoinUsageInfo } from '../types/coin';
import { PagingDataResponse } from '../types/response';

export async function getChargeCoin(token: string | null, cursor: string) {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<CoinRechargeInfo>>>(`/coin/history/earning?cursor=${cursor}`, {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });

  return response.data.data;
}

export async function getUsageCoin(token: string | null, cursor: string) {
  const response = await fetchInstance.get<AxiosResponse<PagingDataResponse<CoinUsageInfo>>>(`/coin/history/usage?cursor=${cursor}`, {
    headers: {
      Authorization: token,
    },
    withCredentials: true,
  });

  return response.data.data;
}
