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
  const response = await fetchInstance.post('/login', { id, passwrod });
  return response.data.response;
}
