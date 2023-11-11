import { fetchInstance } from './instance';

interface LoginReturnInfo {
  grantType: string,
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresIn: number
}

export async function login(
  id: string,
  passwrod: string,
): Promise<LoginReturnInfo> {
  const response = await fetchInstance.post('/auth/login', { eamil: id, passwrod });
  return response.data.response;
}

export async function logout(
  nickname: string,
  gender: string,
  age: number,
  locale: string,
): Promise<null> {
  const response = await fetchInstance.post('/auth/logout', {
    nickname,
    gender,
    age,
    locale,
  });
  return response.data.response;
}
