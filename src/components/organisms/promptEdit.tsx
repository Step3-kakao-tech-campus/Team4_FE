import React from 'react';
import { useMutation } from 'react-query';
import { useParams, useNavigate } from 'react-router-dom';
import Icon from '../atoms/icon';
import PromptList from '../molecules/promptList';
import Button from '../atoms/button';
import { createPrompt } from '../../apis/prompt';

interface PromptEditProps {
  prompts: { [key: string]: number },
  setPrompts: React.Dispatch<React.SetStateAction<{}>>,
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>,
}

function PromptEdit({ prompts, setPrompts, setIsClick }: PromptEditProps) {
  const navigate = useNavigate();
  const { storeId, reviewId } = useParams();
  const promptId = 1;
  const { mutate: createPromptMutation } = useMutation({ // post 요청 성공 시 promptId 값 받음
    mutationKey: 'createPrompt',
    mutationFn: () => {
      if (storeId === undefined || reviewId === undefined) { return createPrompt(0, 0, {}); }
      return createPrompt(+storeId, +reviewId, prompts);
    },
    onSuccess: () => { alert('프롬프트 생성 성공'); navigate(`/prompt/${promptId}`); },
    onError: () => { alert('프롬프트 생성 실패'); },
  });

  const onHandleCreatePrompt = () => {
    if (Object.keys(prompts).length < 1) {
      alert('생성할 메뉴가 없습니다.');
      return;
    }
    createPromptMutation();
  };

  return (
    <div>
      <div className="my-6 flex items-center justify-between">
        <h1 className="ml-4 text-3xl">주문 프롬프트</h1>
        <div>
          <span className="text-2xl">
            총
            {Object.keys(prompts).length}
            개
          </span>
        </div>
        <button type="button" className="mr-2" onClick={() => { setIsClick(false); }}>
          <Icon name="OutlineClose" ariaLabel="프롬프트 창 닫기" size="2rem" />
        </button>
      </div>
      <div className="mb-36">
        {
          Object.keys(prompts).map((key) => (
            <div key={key}>
              <PromptList
                menu={key}
                number={prompts[key]}
                setPrompts={setPrompts}
                prompts={prompts}
              />
            </div>
          ))
        }
      </div>
      <Button onClick={() => { onHandleCreatePrompt(); }} size="medium" extraStyle="w-full max-w-[500px] fixed bottom-20">
        프롬프트 생성
      </Button>
    </div>
  );
}

export default PromptEdit;
