import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { useTranslation } from 'react-i18next';
import { RootState } from '../../store/index';
import Input from '../atoms/input';
import Button from '../atoms/button';
import DropdownList from '../molecules/dropdownList';
import { RefHandler } from '../../types/refHandler';
import { profileEdit, profileCreate } from '../../apis/profile';
import { editProfile } from '../../store/slices/userProfileState';

interface EditProfileFormProps {
  isRegister?: boolean;
}

function EditProfileForm({ isRegister = false }: EditProfileFormProps) {
  const { t } = useTranslation();
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openArray, setOpenArray] = useState([false, false]);
  const [gender, setGender] = useState(profile.gender || t('userEditProfilePage.notSelected'));
  const inputRef = useRef<RefHandler>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  // 요청 성공 시 리덕스에 전체 값 저장

  // 페이지 렌더링 시 닉네임, 성별, 언어 서버에서 받아오기

  function checkInputValidation() {
    if (inputRef.current !== null) {
      const nickname = inputRef.current.getInputValue();
      if (nickname === undefined) {
        return false;
      }
      if (nickname.length < 2) {
        alert(t('userEditProfilePage.nickNameLengthError'));
        return false;
      }
      if (gender === t('userEditProfilePage.notSelected')) {
        alert(t('userEditProfilePage.genderNotSelectedError'));
        return false;
      }
      return true;
    }
    return false;
  }

  function updateUserInfoState() {
    if (inputRef.current !== null && ageRef.current !== null) {
      const nickname = inputRef.current.getInputValue();
      if (nickname !== undefined) {
        dispatch(editProfile({
          age: +ageRef.current.value,
          gender,
          nickname,
        }));
      }
    }
  }

  async function onClickProfileEdit() {
    if (inputRef.current !== null && ageRef.current !== null) {
      const nickname = inputRef.current.getInputValue();
      if (nickname === undefined) {
        alert(t('userEditProfilePage.error'));
        return;
      }
      if (checkInputValidation()) {
        // 닉네임, 성별, 언어를 백앤드에 전송
        const result = await profileEdit({ age: +ageRef.current.value, gender, nickname });
        if (result.status === 200) {
          alert(t('userEditProfilePage.success'));
          updateUserInfoState();
          navigate('/');
        } else {
          alert(t('userEditProfilePage.error'));
        }
      }
    }
  }

  async function onClickProfileCraete() {
    if (inputRef.current !== null && ageRef.current !== null) {
      const nickname = inputRef.current.getInputValue();
      if (nickname === undefined) {
        alert(t('userEditProfilePage.error'));
        return;
      }
      if (checkInputValidation()) {
        // 닉네임, 성별, 언어를 백앤드에 전송
        const result = await profileCreate({ age: +ageRef.current.value, gender, nickname });
        if (result.status === 200) {
          alert(t('userEditProfilePage.success'));
          updateUserInfoState();
          navigate('/');
        } else {
          alert(t('userEditProfilePage.error'));
        }
      }
    }
  }

  return (
    <form>
      <div className="my-6 px-12">
        <form>
          <label htmlFor="nickName">
            <span className="font-bold">{t('userEditProfilePage.nickName')}</span>
            <Input mode="singleLine" ref={inputRef} placeholder={profile.nickname} id="nickName" />
          </label>
        </form>
      </div>
      <div className="my-6 px-12">
        <div>
          <div className="mt-6 font-bold">{t('userEditProfilePage.gender')}</div>
          <DropdownList
            value={gender}
            isOpen={openArray[1]}
            setIsOpen={() => { setOpenArray([openArray[0], !openArray[1]]); }}
          >
            <ul className="rounded-b-lg border border-solid border-black bg-white">
              <button type="button" onClick={() => { setGender(t('userEditProfilePage.men')); setOpenArray([openArray[0], false]); }} className="block w-full p-2 text-left">
                <li>{t('userEditProfilePage.men')}</li>
              </button>
              <button type="button" onClick={() => { setGender(t('userEditProfilePage.woman')); setOpenArray([openArray[0], false]); }} className="block w-full p-2 text-left">
                <li>{t('userEditProfilePage.woman')}</li>
              </button>
            </ul>
          </DropdownList>
        </div>
        <div>
          <div className="mt-6 font-bold">{t('userEditProfilePage.language')}</div>
          <input ref={ageRef} type="number" className="w-full rounded-full border border-black bg-white px-4 py-2" />
        </div>
      </div>
      <div className="my-24 text-center">
        {isRegister ? <Button size="medium" extraStyle="px-12 mr-6" onClick={() => { onClickProfileCraete(); }}>{t('userEditProfilePage.userInfoSave')}</Button> : (
          <div>
            <Button size="medium" extraStyle="px-12 mr-6" onClick={() => { onClickProfileEdit(); }}>{t('userEditProfilePage.change')}</Button>
            <Button size="medium" extraStyle="px-12 ml-6" backgroundColor="bg-matgpt-gray" onClick={() => { navigate('/mypage'); }}>{t('userEditProfilePage.cancel')}</Button>
          </div>
        )}
      </div>
    </form>
  );
}

export default EditProfileForm;
