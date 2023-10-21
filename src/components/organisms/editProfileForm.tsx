import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../atoms/input';
import Button from '../atoms/button';
import DropdownList from '../molecules/dropdownList';
import { RefHandler } from '../../types/refHandler';
import { profileEdit } from '../../apis/profileEdit';

interface EditProfileFormType {
  initialLanguage: string,
  initialGender: string,
  initialNickName: string,
}

function EditProfileForm({ initialLanguage, initialGender, initialNickName }: EditProfileFormType) {
  const navigate = useNavigate();
  const [openArray, setOpenArray] = useState([false, false]);
  const [language, setLanguage] = useState(initialLanguage);
  const [gender, setGender] = useState(initialGender);
  const inputRef = useRef<RefHandler>(null);

  // 요청 성공 시 리덕스에 전체 값 저장
  // 취소 클릭시 뒤로 가기

  // 페이지 렌더링 시 닉네임, 성별, 언어 서버에서 받아오기

  async function onClickProfileEdit() {
    if (inputRef.current !== null) {
      const nickName = inputRef.current.getInputValue();
      if (nickName === undefined) {
        alert('오류가 발생했습니다. 다시 시도해 주세요.');
        return;
      }
      if (nickName.length < 2) { alert('닉네임은 2자 이상이여야 합니다.'); } else {
        // 리팩토링 때 값이 변경 되지 않았으면 api 요청안하는 기능 추가
        // 닉네임, 성별, 언어를 백앤드에 전송
        const result = await profileEdit({ language, gender, nickName });
        if (result.status === 200) {
          alert('요청이 성공적이네요!');
        }
      }
    } else {
      alert('오류가 발생했습니다. 다시 시도해 주세요.');
    }
  }
  return (
    <form>
      <div className="my-6 px-12">
        <form>
          <label htmlFor="nickName">
            <span className="font-bold">닉네임</span>
            <Input mode="singleLine" ref={inputRef} placeholder={initialNickName} id="nickName" />
          </label>
        </form>
      </div>
      <div className="my-6 px-12">
        <div>
          <div className="font-bold ">언어</div>
          <DropdownList
            value={language}
            isOpen={openArray[0]}
            setIsOpen={() => { setOpenArray([!openArray[0], openArray[1]]); }}
          >
            <ul className="rounded-b-lg border border-solid border-black bg-white">
              <button type="button" onClick={() => { setLanguage('한국어'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>한국어</li>
              </button>
              <button type="button" onClick={() => { setLanguage('영어'); setOpenArray([false, openArray[1]]); }} className="block w-full p-2 text-left">
                <li>영어</li>
              </button>
            </ul>
          </DropdownList>
        </div>
        <div>
          <div className="mt-6 font-bold">성별</div>
          <DropdownList
            value={gender}
            isOpen={openArray[1]}
            setIsOpen={() => { setOpenArray([openArray[0], !openArray[1]]); }}
          >
            <ul className="rounded-b-lg border border-solid border-black bg-white">
              <button type="button" onClick={() => { setGender('남자'); setOpenArray([openArray[0], false]); }} className="block w-full p-2 text-left">
                <li>남자</li>
              </button>
              <button type="button" onClick={() => { setGender('여자'); setOpenArray([openArray[0], false]); }} className="block w-full p-2 text-left">
                <li>여자</li>
              </button>
            </ul>
          </DropdownList>
        </div>
      </div>
      <div className="my-24 text-center">
        <Button size="medium" extraStyle="px-12 mr-6" onClick={() => { onClickProfileEdit(); }}>변경</Button>
        <Button size="medium" extraStyle="px-12 ml-6" backgroundColor="bg-matgpt-gray" onClick={() => { navigate('/mypage'); }}>취소</Button>
      </div>
    </form>
  );
}

export default EditProfileForm;
