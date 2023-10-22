import React from 'react';
import { useQuery } from 'react-query';
import { getProfile } from '../../apis/profile';
import UserEditProfileTeamplate from '../template/userEditProfileTeamplate';

function UserEditProfilePage() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['/mypage/profile'],
    queryFn: () => getProfile(),
  });
  if (data && !isLoading && !isFetching) {
    return (
      <UserEditProfileTeamplate
        language={data.language}
        gender={data.gender}
        nickName={data.nickName}
        profileImage={data.profileImage}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default UserEditProfilePage;
