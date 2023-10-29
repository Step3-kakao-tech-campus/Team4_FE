import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../atoms/button';

interface PromptTemplateProps {
  prompt: { [key: string]: number },
}

function PromptTemplate({ prompt }: PromptTemplateProps) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="mt-12 flex flex-col items-center">
        <h1 className="text-3xl">주문 할게요!</h1>
        <div className="mt-8 flex flex-col items-center">
          <span className="text-lg">
            한국어가 서툰 외국인을 위한 프로그램입니다.
          </span>
          <span className="text-lg">
            웃으면서 응대해주시면 감사하겠습니다!
          </span>
        </div>
      </div>
      <div className="mt-36 flex flex-col items-center">
        {Object.keys(prompt).map((key) => (
          <div className="mb-8" key={key}>
            <span className="mr-16 text-2xl font-normal">{key}</span>
            <span className="text-xl font-normal">{prompt[key]}</span>
          </div>
        ))}
      </div>
      <Button size="medium" onClick={() => { navigate(-1); }} extraStyle="fixed bottom-24 w-full max-w-[500px]">
        확인
      </Button>
    </div>
  );
}

export default PromptTemplate;
