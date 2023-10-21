import { fetchInstance } from './instance';

interface ProfileEditType {
  language: string,
  gender: string,
  nickName: string,
}

interface ResultType {
  status: number,
}
export async function profileEdit({ language, gender, nickName }: ProfileEditType)
  : Promise<ResultType> {
  const response = await fetchInstance.put('/mypage/edit-profile', {
    language,
    gender,
    nickName,
  });
  return response;
}
