import React from 'react';
import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import EditProfileForm from '../organisms/editProfileForm';
import EditProfileImage from '../organisms/editProfileImage';

function UserEditProfileTeamplate() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-gradient-to-b from-matgpt-blue from-55% to-white to-45%">
        <div className="flex items-center justify-between text-lg text-white">
          <PageTitleCard pageTitle={t('userPage.pageTitle')} />
        </div>
        <EditProfileImage />
      </div>
      <EditProfileForm />
    </div>
  );
}

export default UserEditProfileTeamplate;
