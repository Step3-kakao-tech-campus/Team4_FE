import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitleCard from '../molecules/pageTitleCard';
import Button from '../atoms/button';
import { register } from '../../apis/register';

function Register() {
  const navigate = useNavigate();
  const [validationMessage, setValidationMessage] = useState({
    id: '',
    password: '',
    passwrodCheck: '',
  });

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
      setValidationMessage((prev) => ({ ...prev, id: '영어,숫자로 이루어진 4자~15자로 입력해주세요.' }));
      return false;
    }

    setValidationMessage((prev) => ({ ...prev, id: '' }));

    if (!passwordRegex.test(passwordRef.current.value)) {
      setValidationMessage((prev) => ({ ...prev, password: '영어,숫자,특수문자로 이루어진 8~20자로 입력해주세요.' }));
      return false;
    }
    setValidationMessage((prev) => ({ ...prev, password: '' }));
    if (passwordRef.current.value !== passwordCheckRef.current.value) {
      setValidationMessage((prev) => ({ ...prev, passwrodCheck: '비밀번호와 비밀번호 확인 값이 다릅니다.' }));
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
        alert('회원가입에 성공하였습니다.');
        navigate('/registerUserInfo');
      }).catch((err) => {
        alert(err);
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <PageTitleCard pageTitle="회원가입 페이지" />
      <div className="flex flex-col items-center pb-12 pt-36 text-4xl font-bold">
        <div className="text-6xl">
          <span className="text-matgpt-red">MatGP</span>
          T
        </div>
        <div>
          지금 회원가입하세요.
        </div>
      </div>

      <div className="relative mb-12 flex flex-col">
        <span>아이디</span>
        <input
          type="text"
          placeholder="아이디를 입력하세요."
          className="rounded-full border border-black bg-white px-4 py-2"
          ref={idRef}
        />
        <span className="absolute bottom-[-3rem] font-bold text-matgpt-red">{validationMessage.id}</span>
      </div>
      <div className="relative mb-12 flex flex-col">
        <span>비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          className="rounded-full border border-black bg-white px-4 py-2"
          ref={passwordRef}
        />
        <span className="absolute bottom-[-3rem] font-bold text-matgpt-red">{validationMessage.password}</span>
      </div>
      <div className="relative mb-8 flex flex-col">
        <span>비밀번호 확인</span>
        <input
          type="password"
          placeholder="비밀번호를 재입력하세요."
          className="rounded-full border border-black bg-white px-4 py-2"
          ref={passwordCheckRef}
        />
        <span className="absolute bottom-[-3rem] font-bold text-matgpt-red">{validationMessage.passwrodCheck}</span>
      </div>
      <div className="mt-4">
        <Button size="large" onClick={onClickRegister}>회원가입 완료</Button>
      </div>
    </div>
  );
}

export default Register;
