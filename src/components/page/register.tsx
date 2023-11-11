import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PageTitleCard from '../molecules/pageTitleCard';
import Button from '../atoms/button';
import { register } from '../../apis/register';

function Register() {
  const navigate = useNavigate();
  const [validationMessage, setValidationMessage] = useState({
    id: '',
    password: '',
    passwrodCheck: '',
    register: '',
  });
  const { t } = useTranslation();

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordCheckRef = useRef<HTMLInputElement>(null);

  const validation = () => {
    const idRegex = /^[a-z0-9]{4,15}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    if (idRef.current === null
      || passwordRef.current === null
      || passwordCheckRef.current === null) return false;

    if (!idRegex.test(idRef.current.value)) {
      setValidationMessage((prev) => ({ ...prev, id: t('register.idError') }));
      return false;
    }

    setValidationMessage((prev) => ({ ...prev, id: '' }));

    if (!passwordRegex.test(passwordRef.current.value)) {
      setValidationMessage((prev) => ({ ...prev, password: t('register.passwordError') }));
      return false;
    }
    setValidationMessage((prev) => ({ ...prev, password: '' }));
    if (passwordRef.current.value !== passwordCheckRef.current.value) {
      setValidationMessage((prev) => ({ ...prev, passwrodCheck: t('register.passwordCheckError') }));
      return false;
    }
    setValidationMessage((prev) => ({ ...prev, passwrodCheck: '' }));
    return true;
  };

  const onClickRegister = () => {
    if (idRef.current === null
      || passwordRef.current === null
      || passwordCheckRef.current === null) return;
    if (validation()) {
      register(idRef.current.value, passwordRef.current.value).then((res) => {
        localStorage.setItem('accessToken', `Bearer ${res.accessToken}`);
        localStorage.setItem('refreshToken', `Bearer ${res.refreshToken}`);
        localStorage.setItem('accessTokenExpiresIn', `${res.accessTokenExpiresIn}`);
        alert(t('register.successSignIn'));
        navigate('/registerUserInfo');
      }).catch((err) => {
        setValidationMessage((prev) => ({ ...prev, register: '이미 존재하는 아이디입니다.' }));
        alert(err);
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <PageTitleCard pageTitle={t('register.pageTitle')} />
      <div className="flex flex-col items-center pb-12 pt-36 text-4xl font-bold">
        <div className="text-6xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </div>
        <div>
          {t('register.pageMessage')}
        </div>
      </div>

      <div className="relative mb-12 flex flex-col">
        <span>
          {' '}
          {t('register.id')}
        </span>
        <input
          type="text"
          placeholder={t('register.idPlaceHolder')}
          className="rounded-full border border-black bg-white px-4 py-2"
          ref={idRef}
        />
        <span className="absolute bottom-[-3rem] font-bold text-matgpt-red">{validationMessage.id}</span>
      </div>
      <div className="relative mb-12 flex flex-col">
        <span>{t('register.password')}</span>
        <input
          type="password"
          placeholder={t('register.passwordPlaceHolder')}
          className="rounded-full border border-black bg-white px-4 py-2"
          ref={passwordRef}
        />
        <span className="absolute bottom-[-3rem] font-bold text-matgpt-red">{validationMessage.password}</span>
      </div>
      <div className="relative mb-8 flex flex-col">
        <span>{t('register.passwordCheck')}</span>
        <input
          type="password"
          placeholder={t('register.passwordCheckPlaceHolder')}
          className="rounded-full border border-black bg-white px-4 py-2"
          ref={passwordCheckRef}
        />
        <span className="absolute bottom-[-3rem] font-bold text-matgpt-red">{validationMessage.passwrodCheck}</span>
      </div>
      <div className="relative mt-4 flex flex-col items-center">
        <Button size="large" onClick={onClickRegister}>{t('register.successSignInButton')}</Button>
        <span className="font-bold text-matgpt-red">{validationMessage.register}</span>
      </div>
    </div>
  );
}

export default Register;
