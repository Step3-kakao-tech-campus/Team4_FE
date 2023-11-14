import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../store';
import PromptTemplate from '../template/promptTemplate';

function PromptPage() {
  const navigate = useNavigate();
  const prompts = useSelector((state: RootState) => state.promptMenu);
  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login', {
        replace: true,
      });
    }
  }, []);

  return (
    <PromptTemplate
      prompt={prompts}
    />
  );
}

export default PromptPage;
