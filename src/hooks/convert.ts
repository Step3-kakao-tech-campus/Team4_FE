import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

import {
  MILLISECOND_DAY, MILLISECOND_HOUR, MILLISECOND_MINUTE, MILLISECOND_MONTH, MILLISECOND_YEAR,
} from '../utils/convert';

export default function useElapsedDate({ dateString }: { dateString: string }) {
  const { t } = useTranslation();

  const calculateElapsedDate = useCallback(() => {
    const dateDiff = new Date().getTime() - new Date(dateString).getTime();

    if (dateDiff < MILLISECOND_MINUTE) { // 1분 미만
      return t('elapsedDate.moment');
    }
    if (dateDiff < MILLISECOND_HOUR) { // 1시간 미만
      return `${Math.floor(dateDiff / MILLISECOND_MINUTE)} ${t('elapsedDate.minute')}`;
    }
    if (dateDiff < MILLISECOND_DAY) { // 1일 미만
      return `${Math.floor(dateDiff / MILLISECOND_HOUR)} ${t('elapsedDate.hour')}`;
    }
    if (dateDiff < MILLISECOND_MONTH) { // 1달 미만
      return `${Math.floor(dateDiff / MILLISECOND_DAY)} ${t('elapsedDate.day')}`;
    }
    if (dateDiff < MILLISECOND_YEAR) { // 1년 미만
      return `${Math.floor(dateDiff / MILLISECOND_MONTH)} ${t('elapsedDate.month')}`;
    }

    return `${Math.floor(dateDiff / MILLISECOND_YEAR)} ${t('elapsedDate.year')}`;
  }, [dateString]);

  return calculateElapsedDate();
}
