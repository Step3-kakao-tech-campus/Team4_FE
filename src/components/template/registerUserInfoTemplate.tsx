import React from 'react';
import { useTranslation } from 'react-i18next';
import EditProfileForm from '../organisms/editProfileForm';
import EditProfileImage from '../organisms/editProfileImage';
import PageTitleCard from '../molecules/pageTitleCard';

function RegisterUserInfoTemplate() {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-gradient-to-b from-matgpt-blue from-55% to-white to-45%">
        <PageTitleCard pageTitle={t('registerUserInfoPage.pageTitle')} isCanBackPage={false} />
        <EditProfileImage />
      </div>
      <EditProfileForm isRegister />
    </div>
  );
}

export default RegisterUserInfoTemplate;
