import { fetchInstance } from './instance';
import { ProfileInfo, ProfileEditInfo } from '../types/profile';

interface ResultType {
  status: number,
}
export async function profileEdit({
  age, gender, nickname, language,
}: ProfileEditInfo)
  : Promise<ResultType> {
  const response = await fetchInstance.put('/users-info', {
    language,
    age,
    gender,
    nickname,
  });
  return response;
}

export async function profileCreate({
  age, gender, nickname, language,
}: ProfileEditInfo)
  : Promise<ResultType> {
  const response = await fetchInstance.post('/users/info', {
    locale: language,
    age,
    gender,
    nickname,
  });
  return response;
}

export async function getProfile(): Promise<ProfileInfo> {
  const response = await fetchInstance.get('/users/info');
  return response.data.data;
}

export async function getPresignedUrl(): Promise<{ data: string }> {
  const response = await fetchInstance.get('/users/image-temp');
  return response.data;
}

export async function putUserImage(presignedUrl: string, imageFile: Blob): Promise<null> {
  const response = await fetchInstance.put(`${presignedUrl}`, imageFile);
  return response.data;
}

export async function imageComplete(email: string, presignedUrl: string)
  : Promise<{ profileImageUrl: string }> {
  const response = await fetchInstance.post('/users/image-complete', { email, presignedUrl });
  return response.data;
}
