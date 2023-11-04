import React from 'react';
import PageTitleCard from '../molecules/pageTitleCard';
import SocialLoginButton from '../atoms/socialLoginButton';
import Button from '../atoms/button';

function Login() {
  return (
    <div className="flex flex-col items-center">
      <PageTitleCard pageTitle="로그인 페이지" />
      <div className="flex flex-col items-center pb-24 pt-36 text-4xl font-bold">
        <div className="text-6xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </div>
        <div>
          지금 로그인하세요.
        </div>
      </div>
      <div>
        <div className="mb-6">
          <SocialLoginButton size="large" name="kakao" />
        </div>
        <div>
          <SocialLoginButton size="large" name="google" />
        </div>
      </div>
      <div className="mt-36">
        <Button size="large" backgroundColor="bg-matgpt-gray" extraStyle="px-12">나중에 로그인 하기</Button>
      </div>
    </div>
  );
}

export default Login;
