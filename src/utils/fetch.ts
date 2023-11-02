import axios from 'axios';
import moment from 'moment';

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

  instance.interceptors.request.use((config) => {
    const newConfig = { ...config };
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken !== 'null') {
      const accessTokenExpiresIn = localStorage.get('accessTokenExpiresIn');
      if (moment(accessTokenExpiresIn).diff(moment()) < 0) { // 발급 유효 시간 초과 시 재 발급
        axios({
          url: 'api url',
          method: 'post',
          headers: {
            accessToken: localStorage.getItem('accessToken'),
            refreshToken: localStorage.getItem('refreshToken'),
          },
        }).then((res) => {
          localStorage.setItem('accessToken', `Bearer ${res.data.accessToken}`);
          localStorage.setItem('accessTokenExpiresIn', `Bearer ${res.data.accessTokenExpiresIn}`);
        });
      }
      newConfig.headers.Authorization = accessToken;
      return newConfig;
    }

    return config;
  });

  return instance;
};
