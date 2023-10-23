export interface CoinRechargeInfo {
  rechargeId: number,
  date: Date;
  reChargeCoin: number;
  totalCoin: number;
}

export interface CoinUsageInfo {
  usageId: number,
  date: Date;
  usageCoin: number,
  totalCoin: number,
}
