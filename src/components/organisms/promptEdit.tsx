import React from 'react';
import Icon from '../atoms/icon';
import PromptList from '../molecules/promptList';

interface PromptEditProps {
  prompts: { [key: string]: number },
  setPrompts: React.Dispatch<React.SetStateAction<{}>>,
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>,
}

function PromptEdit({ prompts, setPrompts, setIsClick }: PromptEditProps) {
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
        <button type="button" className="mr-8" onClick={() => { setIsClick(false); }}>
          <Icon name="OutlineClose" ariaLabel="프롬프트 창 닫기" size="2rem" />
        </button>
      </div>
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
  );
}

export default PromptEdit;
