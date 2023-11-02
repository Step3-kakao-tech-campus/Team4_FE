import { fetchInstance } from './instance';

interface GetTokenInfo {
  grantType: string,
  accessToken: string,
  refreshToken: string,
  accessTokenExpiresin: number,
}

export async function getToken(): Promise<GetTokenInfo> {
  const response = await fetchInstance.get('/login-redirect');
  return response.data.response;
}
