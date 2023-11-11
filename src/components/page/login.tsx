import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import Button from '../atoms/button';
import Icon from '../atoms/icon';
import { login, logout } from '../../apis/login';
import { getProfile } from '../../apis/profile';

function Login() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLogin] = useState(localStorage.getItem('accessToken') !== null);

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const onClickLogin = () => {
    if (idRef.current === null || passwordRef.current === null) { return; }
    login(idRef.current.value, passwordRef.current.value).then((res) => {
      localStorage.setItem('accessToken', `Bearer ${res.accessToken}`);
      localStorage.setItem('refreshToken', `Bearer ${res.refreshToken}`);
      localStorage.setItem('accessTokenExpiresIn', `${res.accessTokenExpiresIn}`);
      alert(t('login.success'));
      setIsError(false);

      getProfile().then((response) => {
        localStorage.setItem('email', response.email);
        localStorage.setItem('nickname', response.nickname);
        localStorage.setItem('profileImageUrl', response.profileImageUrl);
        localStorage.setItem('gender', response.gender.toLowerCase());
        localStorage.setItem('age', `${response.age}`);
        localStorage.setItem('language', response.locale.toLowerCase());
      }).catch(() => {
        alert('유저 정보를 받아올 수 없습니다.');
      });
      navigate(localStorage.getItem('previouseUrl') || '/');
    }).catch((err) => {
      setIsError(true);
      setErrorMessage(err.message);
      // api상태 코드에 따라 아이디가 틀림.. 이런 부분 미 구현
    });
  };

  const onClickLogout = () => {
    if (localStorage.getItem('accessToken') === null) {
      alert('로그인 상태가 아닙니다.');
      return;
    }

    const accessToken = localStorage.getItem('accessToken') || '';
    const refreshToken = localStorage.getItem('refreshToken') || '';

    logout(accessToken.split(' ')[1], refreshToken.split(' ')[1]).then(() => {
      localStorage.removeItem('email');
      localStorage.removeItem('nickname');
      localStorage.removeItem('profileImageUrl');
      localStorage.removeItem('gender');
      localStorage.removeItem('age');
      localStorage.removeItem('language');
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('accessTokenExpiresIn');
      window.location.reload();
    }).catch((err) => {
      alert(err);
    });
  };

  return (
    <div className="flex flex-col items-center">
      <PageTitleCard pageTitle={t('login.pageTitle')} />
      <div className="flex flex-col items-center pb-20 pt-36 text-4xl font-bold">
        <div className="text-6xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </div>
        <div>
          {t('login.loginPageTitle')}
        </div>
      </div>
      {isLogin ? (
        <div>
          로그인 상태입니다.
        </div>
      ) : (
        <div>
          <div className="relative mb-2 flex flex-col items-center">
            <div className="mb-2">
              <input
                type="text"
                placeholder={t('login.idPlaceHolder')}
                className="w-full rounded-full border border-black bg-white px-4 py-2"
                ref={idRef}
              />
            </div>
            <div className="relative">
              <input
                type={isPasswordHide ? 'password' : 'text'}
                placeholder={t('login.passwordPlaceHolder')}
                className="w-full rounded-full border border-black bg-white px-4 py-2"
                ref={passwordRef}
              />
              <div>
                {isPasswordHide ? (
                  <button
                    className="absolute right-2 top-2"
                    type="button"
                    onClick={() => { setIsPasswordHide(false); }}
                  >
                    <Icon name="EyeCheck" ariaLabel={t('login.passwordHide')} size="1.3rem" />
                  </button>
                )
                  : (
                    <button
                      className="absolute right-2 top-3"
                      type="button"
                      onClick={() => { setIsPasswordHide(true); }}
                    >
                      <Icon name="EyeClosed" ariaLabel={t('login.passwordSeen')} size="1.3rem" />
                    </button>
                  )}
              </div>
            </div>
            {isError ? (
              <div className="absolute bottom-[-3rem]">
                <span className="font-bold text-matgpt-red">{errorMessage}</span>
              </div>
            ) : null}
          </div>
          <div className="mt-12">
            <Button size="large" onClick={onClickLogin}>{t('login.loginButton')}</Button>
          </div>
        </div>
      )}
      <div className="mt-3 flex justify-center">
        <button type="button" className="underline decoration-solid" onClick={() => { navigate('/register'); }}>{t('login.register')}</button>
        <Icon name="MinusVertical" size="1.5rem" ariaLabel={t('login.verticalLine')} />
        <button type="button" className="underline decoration-solid" onClick={onClickLogout}>{t('login.logout')}</button>
      </div>

    </div>
  );
}

export default Login;
