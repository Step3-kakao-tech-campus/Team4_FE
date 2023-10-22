import { fetchInstance } from './instance';
import { ProfileInfo, ProfileEditInfo } from '../types/profile';

interface ResultType {
  status: number,
}
export async function profileEdit({ language, gender, nickName }: ProfileEditInfo)
  : Promise<ResultType> {
  const response = await fetchInstance.put('/mypage/edit-profile', {
    language,
    gender,
    nickName,
  });
  return response;
}

export async function getProfile(): Promise<ProfileInfo> {
  const response = await fetchInstance.get('/mypage/profile');
  return response.data;
}
