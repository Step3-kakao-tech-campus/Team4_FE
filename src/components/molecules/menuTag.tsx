import { forwardRef, useState } from 'react';
import { RefHandler } from '../../types/refHandler';
import Input from '../atoms/input';
import Button from '../atoms/button';

interface MenuTagProps {
  name: string;
  mode: 'modify' | 'prompt';
  onModifyEvent?: React.MouseEventHandler<HTMLButtonElement>;
  onPromptEvent?: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuTag = forwardRef<RefHandler, MenuTagProps>((
  {
    name,
    mode,
    onModifyEvent = () => {},
    onPromptEvent = () => {},
  },
  ref,
) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (mode === 'modify') {
    return (
      <div>
        {isExpanded ? (
          <div className="relative flex w-[10rem] flex-col items-center">
            <div className="flex flex-col gap-2 rounded-xl bg-black px-4 py-2">
              <Input ref={ref} mode="singleLine" defaultValue={name} />
              <div className="flex flex-row justify-around">
                <Button
                  size="small"
                  textColor="text-black"
                  onClick={onModifyEvent}
                >
                  수정
                </Button>
                <Button
                  size="small"
                  backgroundColor="bg-matgpt-gray"
                  textColor="text-black"
                  onClick={() => setIsExpanded(false)}
                >
                  취소
                </Button>
              </div>
            </div>
            <div className="w-4 border-[0.5rem] border-transparent border-t-black" />
          </div>
        ) : (
          <div className="relative flex w-[10rem] flex-col items-center">
            <button
              type="button"
              className="rounded-xl bg-black px-4 py-2"
              onClick={() => setIsExpanded(true)}
            >
              <span className="text-white">{name}</span>
            </button>
            <div className="w-4 border-[0.5rem] border-transparent border-t-black" />
          </div>
        )}
      </div>
    );
  }

  if (mode === 'prompt') {
    return (
      <div>
        {isExpanded ? (
          <div className="relative flex w-[10rem] flex-col items-center">
            <section className="flex flex-col rounded-xl bg-black px-4 py-2 text-white">
              <h3>{name}</h3>
              <p>프롬프트에 추가하시겠습니까?</p>
              <div className="mt-1 flex flex-row justify-around">
                <Button
                  size="small"
                  textColor="text-black"
                  onClick={onPromptEvent}
                >
                  추가
                </Button>
                <Button
                  size="small"
                  backgroundColor="bg-matgpt-gray"
                  textColor="text-black"
                  onClick={() => setIsExpanded(false)}
                >
                  취소
                </Button>
              </div>
            </section>
            <div className="w-4 border-[0.5rem] border-transparent border-t-black" />
          </div>
        ) : (
          <div className="relative flex w-[10rem] flex-col items-center">
            <button
              type="button"
              className="rounded-xl bg-black px-4 py-2"
              onClick={() => setIsExpanded(true)}
            >
              <span className="text-white">{name}</span>
            </button>
            <div className="w-4 border-[0.5rem] border-transparent border-t-black" />
          </div>
        ) }
      </div>
    );
  }

  return (
    <>
    </>
  );
});

export default MenuTag;
