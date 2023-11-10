import React from 'react';
import PageTitleCard from '../molecules/pageTitleCard';
import Button from '../atoms/button';

function Register() {
  return (
    <div className="flex flex-col items-center">
      <PageTitleCard pageTitle="회원가입 페이지" />
      <div className="flex flex-col items-center pb-12 pt-36 text-4xl font-bold">
        <div className="text-6xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </div>
        <div>
          지금 회원가입하세요.
        </div>
      </div>

      <div className="mb-8 flex flex-col">
        <span>아이디</span>
        <input
          type="text"
          placeholder="아이디를 입력하세요."
          className="rounded-full border border-black bg-white px-4 py-2"
        />
      </div>
      <div className="mb-8 flex flex-col">
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          className="rounded-full border border-black bg-white px-4 py-2"
        />
      </div>
      <div className="mb-8 flex flex-col">
        <span>비밀번호 확인</span>
        <input
          type="password"
          placeholder="비밀번호를 재입력하세요."
          className="rounded-full border border-black bg-white px-4 py-2"
        />
      </div>
      <div className="mt-4">
        <Button size="large">회원가입 완료</Button>
      </div>
    </div>
  );
}

export default Register;
