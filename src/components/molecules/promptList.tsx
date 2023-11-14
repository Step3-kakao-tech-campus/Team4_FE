import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '../atoms/icon';
import type { RootState } from '../../store';
import { MenuNumber, DeleteMenu } from '../../store/slices/promptMenu';

interface PromptListProps {
  menu: string,
}

function PromptList({
  menu,
}: PromptListProps) {
  const prompts = useSelector((state: RootState) => state.promptMenu);
  const [number, setNumber] = useState(prompts[menu]);
  const dispatch = useDispatch();

  const onHandleMenuNumber = (type: 'plus' | 'minus') => {
    let newNumber = number;
    if (newNumber < 1) {
      alert('메뉴의 개수가 0입니다.');
      return;
    }

    if (type === 'plus') { newNumber += 1; } else { newNumber -= 1; }
    dispatch(MenuNumber({ menu, newNumber }));
    setNumber(newNumber);
  };

  return (
    <div className="mb-8 flex items-center justify-between px-4">
      <span className="pl-2 text-2xl font-normal">{menu}</span>
      <div className="flex flex-col items-end">
        <button type="button" onClick={() => { dispatch(DeleteMenu({ menu })); }}>
          <Icon name="OutlineClose" ariaLabel="메뉴 목록에서 삭제하기" size="1.5rem" />
        </button>
        <div className="flex pt-8">
          <button type="button" onClick={() => { onHandleMenuNumber('minus'); }}>
            <Icon name="OutlineMinus" ariaLabel="메뉴 개수 줄이기" size="1.5rem" />
          </button>
          <span className="px-2">{number}</span>
          <button type="button" onClick={() => { onHandleMenuNumber('plus'); }}>
            <Icon name="OutlinePlus" ariaLabel="메뉴 개수 늘리기" size="1.5rem" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PromptList;
