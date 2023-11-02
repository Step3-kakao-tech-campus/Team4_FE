import React, { useEffect } from 'react';
import base64 from 'base-64';
import { useNavigate, useSearchParams } from 'react-router-dom';

function LoginRedriect() {
  const navigate = useNavigate();
  const [serchParams] = useSearchParams();

  useEffect(() => {
    const isFirstLogin = Boolean(serchParams.get('isFirstLogin'));
    const accessToken = base64.decode(serchParams.get('accessToken') || '');
    const refreshToken = base64.decode(serchParams.get('refreshToken') || '');
    const accessTokenExpiresIn = Number(serchParams.get('accessTokenExpiresIn') || '');

    localStorage.setItem('accessToken', `Bearer ${accessToken}`);
    localStorage.setItem('refreshToken', `Bearer ${refreshToken}`);
    localStorage.setItem('accessTokenExpiresIn', `${accessTokenExpiresIn}`);

    if (isFirstLogin) {
      // 회원 추가 정보 입력 페이지로 navigate
    } else {
      // 기존 유저면 원래 있던 페이지로 이동
      navigate(localStorage.getItem('previouseUrl') || '/');
    }
  }, []);
  return (
    <div>리다이렉트 됩니다.</div>
  );
}

export default LoginRedriect;
