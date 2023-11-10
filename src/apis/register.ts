import { fetchInstance } from './instance';

interface LoginReturnInfo {
  grantType: string,
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresIn: number
}

export async function register(
  id: string,
  passwrod: string,
): Promise<LoginReturnInfo> {
  const response = await fetchInstance.post('/auth/signup', { id, passwrod });
  return response.data.response;
}

export async function logout(): Promise<null> {
  const response = await fetchInstance.post('/auth/logout');
  return response.data.response;
}
