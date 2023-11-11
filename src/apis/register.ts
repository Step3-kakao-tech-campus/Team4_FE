import { fetchInstance } from './instance';

interface LoginReturnInfo {
  grantType: string,
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresIn: number
}

export async function register(
  id: string,
  password: string,
): Promise<LoginReturnInfo> {
  const response = await fetchInstance.post('/auth/signup', { email: id, password });
  return response.data.data;
}

export async function logout(): Promise<null> {
  const response = await fetchInstance.post('/auth/logout');
  return response.data;
}
