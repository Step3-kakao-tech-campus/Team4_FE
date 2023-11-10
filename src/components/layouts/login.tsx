import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitleCard from '../molecules/pageTitleCard';
import Button from '../atoms/button';
import Icon from '../atoms/icon';

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    // 로그인 상태인데 이 레이아웃에 들어오면 바로 메인 페이지로 이동
    if (localStorage.getItem('accessToken') !== null) { navigate('/'); }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <PageTitleCard pageTitle="로그인 페이지" />
      <div className="flex flex-col items-center pb-20 pt-36 text-4xl font-bold">
        <div className="text-6xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </div>
        <div>
          지금 로그인하세요.
        </div>
      </div>
      <div className="relative mb-2 flex flex-col items-center">
        <div className="mb-2">
          <input type="text" placeholder="아이디를 입력하세요." className="w-full rounded-full border border-black bg-white px-4 py-2" />
        </div>
        <div>
          <input type="password" placeholder="비밀번호를 입력하세요." className="w-full rounded-full border border-black bg-white px-4 py-2" />
        </div>
        <div className="absolute bottom-[-2rem]">
          <span>아이디가 틀렸습니다.</span>
        </div>
      </div>
      <div className="mt-8">
        <Button size="large">로그인 하기</Button>
      </div>
      <div className="mt-3 flex">
        <button type="button" className="underline decoration-solid">회원가입</button>
        <Icon name="MinusVertical" size="1.5rem" ariaLabel="세로 선" />
        <button type="button" className="underline decoration-solid">로그아웃</button>
      </div>
    </div>
  );
}

export default Login;
