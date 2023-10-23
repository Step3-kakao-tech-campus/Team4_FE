import React, { useRef } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store/index';
import Button from '../atoms/button';

function EditProfileImage() {
  const { t } = useTranslation();
  const imgRef = useRef<HTMLInputElement>(null);
  const onClickProfileImageEdit = () => { };
  const profile = useSelector((state: RootState) => state.profile);

  const handleChange = () => {
    if (imgRef.current?.files?.length === undefined || imgRef.current?.files?.length < 1) {
      alert(t('userPage.fileIsNotUpload'));
      return;
    }
    // 사진이 정상적으로 업로드 됨
    console.log(imgRef.current?.files[0]);
    // 서버에서 AWS S3에 preSignedURL 요청
    // 브라우저에서 AWS preSignedURL로 이미지 upload
    // 전역 상태 값 업데이트
  };

  return (
    <div className="flex flex-col items-center">
      <img src={profile.profileImage} alt={t('userPage.userImage')} className="w-[9rem]" />
      <span className="py-3 text-xl font-bold">{t('userEditProfilePage.nickName')}</span>
      <Button onClick={() => { onClickProfileImageEdit(); }}>
        <label htmlFor="profileImg">{t('userEditProfilePage.profileImageAdd')}</label>
        <input
          ref={imgRef}
          className="hidden"
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={handleChange}
        />
      </Button>
    </div>
  );
}

export default EditProfileImage;
