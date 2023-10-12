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

/**
 * localStorage에 값을 저장합니다.
 * @param key {string}
 * @param value {string}
 */
export const setLocalStorageItem = (key: string, value: string) => {
  if (isLocalStorageAvailable()) {
    localStorage.setItem(key, value);
  }
};

/**
 * localStorage에 저장된 값을 가져옵니다.
 * @param key {string}
 */
export const getLocalStorageItem = (key: string) => {
  if (isLocalStorageAvailable()) {
    return localStorage.getItem(key);
  }

  return null;
};
