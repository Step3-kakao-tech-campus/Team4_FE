import { fetchInstance } from './instance';

interface LoginReturnInfo {
  grantType: string,
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresIn: number
}

export async function login(
  id: string,
  password: string,
): Promise<LoginReturnInfo> {
  const response = await fetchInstance.post('/auth/login', { email: id, password });
  return response.data.data;
}

export async function logout(
  accessToken: string,
  refreshToken: string,
): Promise<null> {
  const response = await fetchInstance.post('/auth/logout', { accessToken, refreshToken });
  return response.data.response;
}
