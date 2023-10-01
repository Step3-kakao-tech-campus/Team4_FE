import React from 'react';

function SocialLoginModal() {
  return (
    <>
      <a href="http://localhost:8080/oauth2/authorization/Google" className="flex items-center justify-center bg-white w-[250px] h-[40px] shadow-md rounded-xl kakao-button mb-2">
        <img src="/img/social-login/google-logo.png" alt="구글 소셜 로그인 로고" className="w-6" />
        <span className="ml-4 text-6">Sign in with Google</span>
      </a>
      <a href="http://localhost:8080/oauth2/authorization/kakao" className="flex items-center justify-center bg-[#FEE500] w-[250px] h-[40px] rounded-xl kakao-button mb-2">
        <img src="/img/social-login/kakao-ballon.png" alt="카카오 소셜 로그인 로고" className="w-6" />
        <span className="ml-4 text-6">Login with Kakao</span>
      </a>
    </>
  );
}

export default SocialLoginModal;
