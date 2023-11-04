import React, { useRef } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store/index';
import Button from '../atoms/button';
import { isImageType, isValidFileSize } from '../../utils/image';

function EditProfileImage() {
  const { t } = useTranslation();
  const imgRef = useRef<HTMLInputElement>(null);
  const onClickProfileImageEdit = () => { };
  const profile = useSelector((state: RootState) => state.profile);

  const handleChange = () => {
    const fileList = imgRef.current?.files;
    if (fileList === undefined || fileList === null || fileList.length < 1) {
      alert(t('userPage.fileIsNotUpload'));
      return;
    }

    if (!isImageType(fileList[0].type)) {
      alert(t('imageUploadError.fileTypeError'));
      return;
    }

    if (!isValidFileSize(fileList[0].size)) {
      alert(t('imageUploadError.fileSizeError'));
    }

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
