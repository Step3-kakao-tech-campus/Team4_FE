import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterUserInfoTemplate from '../template/registerUserInfoTemplate';

function RegisterUserInfoPage() {
  const navigate = useNavigate();
  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login', {
        replace: true,
      });
    }
  }, []);
  return (
    <RegisterUserInfoTemplate />
  );
}

export default RegisterUserInfoPage;
