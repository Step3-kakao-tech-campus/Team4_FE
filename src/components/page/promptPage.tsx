import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPrompt } from '../../apis/prompt';
import PromptTemplate from '../template/promptTemplate';

function PromptPage() {
  const { promptId } = useParams();
  const { data, isLoading, isFetching } = useQuery({
    queryKey: [`getPrompt?cursor=${promptId}`],
    queryFn: () => {
      if (promptId === undefined) {
        return getPrompt(0);
      }
      return getPrompt(+promptId);
    },
  });

  const navigate = useNavigate();
  useEffect(() => {
    // 로그인 상태가 아니면 로그인 레이아웃으로 이동
    if (localStorage.getItem('accessToken') === null) {
      navigate('/login', {
        replace: true,
      });
    }
  }, []);

  if (data && !isLoading && !isFetching) {
    return (
      <PromptTemplate
        prompt={data}
      />
    );
  }
  return (
    <div>Loading..</div>
  );
}

export default PromptPage;
