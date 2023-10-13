import axios from 'axios';

export const createFetchInstance = (
  baseURL: string | undefined,
  timeout: number,
) => {
  const instance = axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};
