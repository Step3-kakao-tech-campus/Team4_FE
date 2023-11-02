import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/index';
import { getToken } from '../../apis/useToken';

function LoginRedriect() {
  const navigate = useNavigate();
  const redirectUrl = useSelector((state: RootState) => state.redirectUrl);

  useEffect(() => {
    getToken()
      .then((res) => {
        const {
          grantType, accessToken, refreshToken, accessTokenExpiresin,
        } = res;
        localStorage.setItem('accessToken', `${grantType}${accessToken}`);
        localStorage.setItem('refreshToken', `${grantType}${refreshToken}`);
        localStorage.setItem('refreshToken', `${accessTokenExpiresin}`);
        navigate(redirectUrl.url);
      })
      .catch((err) => {
        console.log(err);
        navigate(redirectUrl.url);
      });
  });
  return (
    <div>LoginRedirect</div>
  );
}

export default LoginRedriect;
