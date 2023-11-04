export const comma = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const MILLISECOND_MINUTE = 60 * 1000;
export const MILLISECOND_HOUR = 60 * 60 * 1000;
export const MILLISECOND_DAY = 24 * 60 * 60 * 1000;
export const MILLISECOND_MONTH = 30 * 24 * 60 * 60 * 1000;
export const MILLISECOND_YEAR = 365 * 24 * 60 * 60 * 1000;
