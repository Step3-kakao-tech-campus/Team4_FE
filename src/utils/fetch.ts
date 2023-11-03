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

  instance.interceptors.request.use(async (config) => {
    const newConfig = { ...config };
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken !== 'null') {
      const accessTokenExpiresIn = localStorage.getItem('accessTokenExpiresIn');
      if (moment(accessTokenExpiresIn).diff(moment()) < 0) { // 발급 유효 시간 초과 시 재 발급
        await axios.post(
          '/auth/reissue',
          {},
          {
            headers: {
              Authorization: `${localStorage.getItem('refreshToken')}`, // accessToken을 토큰 값으로 사용}
              withCredentials: true,
            },
          },
        ).then((res) => {
          localStorage.setItem('accessToken', `Bearer ${res.data.accessToken}`);
          localStorage.setItem('accessToken', `Bearer ${res.data.refreshToken}`);
          localStorage.setItem('accessTokenExpiresIn', `${res.data.accessTokenExpiresIn}`);
        }).catch((error) => {
          console.log(error);
        });
      }
      newConfig.headers.Authorization = accessToken;
      return newConfig;
    }

    return config;
  });

  return instance;
};
