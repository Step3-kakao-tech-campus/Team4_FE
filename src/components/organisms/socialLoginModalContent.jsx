import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function SocialLoginModalContent({ onCloseModalClick }) {
  return (
    <div className="text-center mt-12 relatie">
      <button type="button" onClick={() => { onCloseModalClick(); }} className="absolute top-3 right-3">
        <AiOutlineClose />
      </button>
      <div className="text-2xl font-bold mb-6">
        <span className="text-4xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </span>
      </div>
      <div className="mb-8 font-bold">
        로그인이 필요합니다.
      </div>
      <div className="w-[250px] mx-auto">
        <a href="http://localhost:8080/oauth2/authorization/Google" className="flex items-center justify-center bg-white w-[250px] h-[40px] shadow-md rounded-xl kakao-button mb-2">
          <img src="/img/social-login/google-logo.png" alt="구글 소셜 로그인 로고" className="w-6" />
          <span className="ml-4 text-6 font-roboto">Sign in with Google</span>
        </a>
        <a href="http://localhost:8080/oauth2/authorization/kakao" className="flex items-center justify-center bg-[#FEE500] w-[250px] h-[40px] rounded-xl kakao-button mb-2">
          <img src="/img/social-login/kakao-ballon.png" alt="카카오 소셜 로그인 로고" className="w-6" />
          <span className="ml-4 text-6">Login with Kakao</span>
        </a>
      </div>
    </div>
  );
}

export default SocialLoginModalContent;
