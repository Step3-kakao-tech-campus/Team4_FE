import React, { useEffect, useState } from 'react';
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

  const [isError] = useState(false);
  const [isPasswordHide, setIsPasswordHide] = useState(true);

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
        <div className="relative">
          <input type={isPasswordHide ? 'password' : 'text'} placeholder="비밀번호를 입력하세요." className="w-full rounded-full border border-black bg-white px-4 py-2" />
          <div>
            {isPasswordHide ? (
              <button
                className="absolute right-2 top-2"
                type="button"
                onClick={() => { setIsPasswordHide(false); }}
              >
                <Icon name="EyeCheck" ariaLabel="비밀번호 숨김 상태" size="1.3rem" />
              </button>
            )
              : (
                <button
                  className="absolute right-2 top-3"
                  type="button"
                  onClick={() => { setIsPasswordHide(true); }}
                >
                  <Icon name="EyeClosed" ariaLabel="비밀번호 보임 상태" size="1.3rem" />
                </button>
              )}
          </div>
        </div>
        {isError ? (
          <div className="absolute bottom-[-2rem]">
            <span>아이디가 틀렸습니다.</span>
          </div>
        ) : null}
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
