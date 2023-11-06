const EXP_KEY = '?exp=';
const EXP_TIME_1_DAY = 86400000;

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 * localStorage가 사용 가능한 지 체크합니다.
 * @returns {boolean}
 */
function isLocalStorageAvailable() {
  let storage;
  try {
    storage = window.localStorage;
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException
      // everything except Firefox
      && (e.name === '22'
        // Firefox
        || e.name === '1014'
        // test name field too, because code might not be present
        // everything except Firefox
        || e.name === 'QuotaExceededError'
        // Firefox
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      // acknowledge QuotaExceededError only if there's something already stored
      && storage
      && storage.length !== 0
    );
  }
}

const parseStorageValue = (value: string) => {
  const parsedValue = value.split(EXP_KEY);

  return {
    value: parsedValue[0],
    expiredDate: parsedValue[1],
  };
};

/**
 * 해당 item의 expired 여부를 확인합니다.
 * @param value {string}
 * @returns {boolean}
 */
const isExpiredItem = (value: string) => {
  const { expiredDate } = parseStorageValue(value);

  if (expiredDate && !Number.isNaN(+expiredDate)) {
    return Date.now() >= +expiredDate;
  }

  return true;
};

/**
 * localStorage에 expired date와 함께 키-값 쌍을 저장합니다.
 * @param key {string}
 * @param value {string}
 */
export const setLocalStorageItem = (key: string, value: string) => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem(key, `${value}?exp=${Date.now() + EXP_TIME_1_DAY}`);
  }
};

/**
 * localStorage에 저장된 값을 가져옵니다.
 * 해당 key가 존재하지 않거나 expired 되었다면 null을 반환합니다.
 * @param key {string}
 * @returns {string}
 */
export const getLocalStorageItem = (key: string) => {
  if (isLocalStorageAvailable()) {
    const value = localStorage.getItem(key);
    if (value && !isExpiredItem(value)) {
      const { value: itemValue } = parseStorageValue(value);

      return itemValue;
    }
  }

  return null;
};
