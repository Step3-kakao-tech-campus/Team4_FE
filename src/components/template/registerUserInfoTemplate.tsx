import React from 'react';
import EditProfileForm from '../organisms/editProfileForm';
import EditProfileImage from '../organisms/editProfileImage';

function RegisterUserInfoTemplate() {
  return (
    <div>
      <EditProfileImage />
      <EditProfileForm />
    </div>
  );
}

export default RegisterUserInfoTemplate;
