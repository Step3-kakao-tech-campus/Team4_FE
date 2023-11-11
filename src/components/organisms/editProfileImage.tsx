import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/button';
import { isImageType, isValidFileSize } from '../../utils/image';
import { getPresignedUrl, imageComplete, putUserImage } from '../../apis/profile';

function EditProfileImage() {
  const { t } = useTranslation();
  const imgRef = useRef<HTMLInputElement>(null);
  const onClickProfileImageEdit = () => { };

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
      return;
    }

    getPresignedUrl().then((res) => {
      console.log(res);
      putUserImage(res.data, fileList[0]).then(() => {
        imageComplete(localStorage.getItem('email') || '', res.data).then((response) => {
          alert('유저 이미지가 성공적으로 변경 되었습니다.');
          localStorage.setItem('profileImageUrl', response.profileImageUrl);
        }).catch(() => {
          alert('유저 이미지가 업로드에 실패하였습니다.');
        });
      }).catch((err) => {
        console.log(err);
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <img src={localStorage.getItem('userImage') || undefined} alt={t('userPage.userImage')} className="h-[9rem] w-[9rem]" />
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
