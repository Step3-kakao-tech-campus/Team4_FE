import React, { useState, useRef } from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';
import DropdownList from '../molecules/dropdownList';
import { RefHandler } from '../../types/refHandler';

interface EditProfileFormType {
  name: string,
}

function EditProfileForm({ name }: EditProfileFormType) {
  const [language, setLanguage] = useState('한국어');
  const [gender, setGender] = useState('남자');
  const inputRef = useRef<RefHandler>(null);

  // 변경 클릭시 서버에 각 상태 값 전송, 닉네임은 유효성 검사부터 (한번에 다 보내는 걸로)
  // 요청 성공 시 리덕스에 전체 값 저장
  // 취소 클릭시 뒤로 가기

  // 페이지 렌더링 시 닉네임, 성별, 언어 서버에서 받아오기

  return (
    <form>
      <div className="my-6 px-12">
        <form>
          <label htmlFor="nickName">
            <span className="font-bold">닉네임</span>
            <Input mode="singleLine" ref={inputRef} placeholder={name} id="nickName" />
          </label>
        </form>
      </div>
      <div className="my-6 px-12">
        <div>
          <div className="font-bold ">언어</div>
          <DropdownList value={language}>
            <ul className="rounded-b-lg border border-solid border-black bg-white">
              <button type="button" onClick={() => { setLanguage('한국어'); }} className="block p-2">
                <li>한국어</li>
              </button>
              <button type="button" onClick={() => { setLanguage('영어'); }} className="block p-2">
                <li>영어</li>
              </button>
            </ul>
          </DropdownList>
        </div>
        <div>
          <div className="mt-6 font-bold">성별</div>
          <DropdownList value={gender}>
            <ul className="rounded-b-lg border border-solid border-black bg-white">
              <button type="button" onClick={() => { setGender('남자'); }} className="block p-2">
                <li>남자</li>
              </button>
              <button type="button" onClick={() => { setGender('여자'); }} className="block p-2">
                <li>여자</li>
              </button>
            </ul>
          </DropdownList>
        </div>
      </div>
      <div className="my-24 text-center">
        <Button size="medium" extraStyle="px-12 mr-6">변경</Button>
        <Button size="medium" extraStyle="px-12 ml-6" backgroundColor="bg-matgpt-gray">취소</Button>
      </div>
    </form>
  );
}

export default EditProfileForm;
