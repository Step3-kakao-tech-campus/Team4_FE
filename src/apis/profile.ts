import { fetchInstance } from './instance';
import { ProfileInfo, ProfileEditInfo } from '../types/profile';

interface ResultType {
  status: number,
}
export async function profileEdit({ age, gender, nickname }: ProfileEditInfo)
  : Promise<ResultType> {
  const response = await fetchInstance.put('/user-info', {
    age,
    gender,
    nickname,
  });
  return response;
}

export async function profileCreate({ age, gender, nickname }: ProfileEditInfo)
  : Promise<ResultType> {
  const response = await fetchInstance.post('/user-info', {
    age,
    gender,
    nickname,
  });
  return response;
}

export async function getProfile(): Promise<ProfileInfo> {
  const response = await fetchInstance.get('/user-info');
  return response.data;
}
