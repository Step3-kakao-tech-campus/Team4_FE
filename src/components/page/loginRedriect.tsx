import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function LoginRedriect() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    axios.get('/login/oauth2/code/kakao', {
      params: {
        code,
      },
    }).then((res) => {
      localStorage.setItem('accessToken', `Bearer ${res.data.accessToken}`);
      localStorage.setItem('refreshToken', `Bearer ${res.data.refreshToken}`);
      localStorage.setItem('accessTokenExpiresIn', `${res.data.accessTokenExpiresIn}`);
      const { isFirstLogin } = res.data;
      if (isFirstLogin) {
        navigate('/registerUserInfo');
      } else {
        navigate(localStorage.getItem('previouseUrl') || '/');
      }
    }).catch((error) => {
      alert(error);
    });
  }, []);
  return (
    <div>리다이렉트 됩니다.</div>
  );
}

export default LoginRedriect;
