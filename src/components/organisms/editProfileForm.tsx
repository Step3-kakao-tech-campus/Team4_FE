import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Input from '../atoms/input';
import Button from '../atoms/button';
import DropdownList from '../molecules/dropdownList';
import { RefHandler } from '../../types/refHandler';
import { profileEdit, profileCreate } from '../../apis/profile';

interface EditProfileFormProps {
  isRegister?: boolean;
}

function EditProfileForm({ isRegister = false }: EditProfileFormProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [openArray, setOpenArray] = useState([false, false]);
  const [gender, setGender] = useState(t('userEditProfilePage.notSelected'));

  const [language, setLanguage] = useState(t('userEditProfilePage.notSelected'));

  const inputRef = useRef<RefHandler>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  // 요청 성공 시 리덕스에 전체 값 저장

  // 페이지 렌더링 시 닉네임, 성별, 언어 서버에서 받아오기

  function checkInputValidation() {
    if (inputRef.current !== null && ageRef.current !== null) {
      const nickname = inputRef.current.getInputValue();
      if (nickname === undefined) {
        return false;
      }
      if (nickname.length < 2) {
        alert(t('userEditProfilePage.nickNameLengthError'));
        return false;
      }
      if (language === t('userEditProfilePage.notSelected')) {
        alert(t('userEditProfilePage.languageNotSelectedError'));
        return false;
      }
      if (gender === t('userEditProfilePage.notSelected')) {
        alert(t('userEditProfilePage.genderNotSelectedError'));
        return false;
      }
      if (+ageRef.current.value === 0) { alert(t('userEditProfilePage.ageNotSelectedError')); return false; }
    }
    return true;
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
        let genderValue = '';
        const age = ageRef.current.value;
        if (gender === 'Woman' || gender === '여자') { genderValue = 'female'; }
        if (gender === 'Men' || gender === '남자') { genderValue = 'male'; }
        profileEdit({
          language,
          age: +ageRef.current.value,
          gender: genderValue,
          nickname,
        }).then(() => {
          localStorage.setItem('language', language);
          localStorage.setItem('gender', genderValue);
          localStorage.setItem('age', age);
          localStorage.setItem('nickname', nickname);
          alert(t('userEditProfilePage.success'));
          navigate('/');
        }).catch(() => {
          alert(t('userEditProfilePage.error'));
        });
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
        // 닉네임, 성별, 언어, 나이를 백앤드에 전송
        let genderValue = '';
        const age = ageRef.current.value;

        if (gender === 'Woman' || gender === '여자') { genderValue = 'female'; }
        if (gender === 'Men' || gender === '남자') { genderValue = 'male'; }
        profileCreate({
          language,
          age: +ageRef.current.value,
          gender: genderValue,
          nickname,
        }).then(() => {
          localStorage.setItem('language', language);
          localStorage.setItem('gender', genderValue);
          localStorage.setItem('age', age);
          console.log(nickname);
          console.log(genderValue);
          localStorage.setItem('nickname', nickname);
          alert(t('userEditProfilePage.success'));
          navigate('/');
        }).catch(() => {
          alert(t('userEditProfilePage.error'));
        });
      }
    }
  }

  return (
    <div>
      <div className="my-6 px-12">
        <form>
          <label htmlFor="nickName">
            <span className="font-bold">{t('userEditProfilePage.nickName')}</span>
            <Input mode="singleLine" ref={inputRef} placeholder={localStorage.getItem('nickname') || undefined} id="nickName" />
          </label>
        </form>
      </div>
      <div className="my-6 px-12">
        <div>
          <div className="mt-6 font-bold">{t('userEditProfilePage.language')}</div>
          <DropdownList
            value={language}
            isOpen={openArray[0]}
            setIsOpen={() => { setOpenArray([!openArray[0], openArray[1]]); }}
          >
            <ul className="rounded-b-lg border border-solid border-black bg-white">
              <button type="button" onClick={() => { setLanguage('us'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>us</li>
              </button>
              <button type="button" onClick={() => { setLanguage('korea'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>korea</li>
              </button>
              <button type="button" onClick={() => { setLanguage('japan'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>japan</li>
              </button>
              <button type="button" onClick={() => { setLanguage('chinese'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>chinese</li>
              </button>
              <button type="button" onClick={() => { setLanguage('simplified_chinese'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>simplified_chinese</li>
              </button>
              <button type="button" onClick={() => { setLanguage('traditional_chinese'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>traditional_chinese</li>
              </button>
              <button type="button" onClick={() => { setLanguage('france'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>france</li>
              </button>
              <button type="button" onClick={() => { setLanguage('germany'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>germany</li>
              </button>
              <button type="button" onClick={() => { setLanguage('italy'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>italy</li>
              </button>
              <button type="button" onClick={() => { setLanguage('uk'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>uk</li>
              </button>
              <button type="button" onClick={() => { setLanguage('canada'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>canada</li>
              </button>
            </ul>
          </DropdownList>
        </div>
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
          <div className="mt-6 font-bold">{t('userEditProfilePage.age')}</div>
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
    </div>
  );
}

export default EditProfileForm;
