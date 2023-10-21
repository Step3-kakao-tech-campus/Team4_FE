import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import Button from '../atoms/button';
import EditProfileForm from '../organisms/editProfileForm';

function UserEditProfileTeamplate() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gradient-to-b from-matgpt-blue from-55% to-white to-45%">
        <div className="flex items-center justify-between text-lg text-white">
          <PageTitleCard pageTitle={t('userPage.pageTitle')} />
        </div>
        <div className="flex flex-col items-center">
          <img src="/image/fakeDb/userPage/userImage.png" alt={t('userPage.userImage')} className="w-[9rem]" />
          <span className="py-3 text-xl font-bold">닉네임</span>
          <Link to="/profileEditingPage">
            <Button>프로필 사진 수정</Button>
          </Link>
        </div>
      </div>
      <EditProfileForm initialLanguage="한국어" initialGender="남자" initialNickName="닉네임" />
    </div>
  );
}

export default UserEditProfileTeamplate;
