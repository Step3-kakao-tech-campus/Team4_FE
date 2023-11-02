import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../apis/getToken';

function LoginRedriect() {
  const navigate = useNavigate();

  useEffect(() => {
    getToken()
      .then((data) => {
        const {
          grantType, accessToken, refreshToken, accessTokenExpiresin,
        } = data;
        localStorage.setItem('accessToken', `${grantType}${accessToken}`);
        localStorage.setItem('refreshToken', `${grantType}${refreshToken}`);
        localStorage.setItem('refreshToken', `${accessTokenExpiresin}`);
        navigate(localStorage.getItem('previouseUrl') || '/');
      })
      .catch((err) => {
        console.log(err);
        navigate(localStorage.getItem('previouseUrl') || '/');
      });
  }, []);
  return (
    <div>리다이렉트 됩니다.</div>
  );
}

export default LoginRedriect;
