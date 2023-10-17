import React from 'react';
import Icon from '../atoms/icon';

interface PageInterface {
  page: number,
  isLastPage: boolean,
  onChangePage: (type: 'left' | 'right') => void,
}

function Page({ page, isLastPage, onChangePage }: PageInterface) {
  function rightPage() {
    if (isLastPage) alert('마지막 페이지 입니다.'); else onChangePage('right');
  }
  function leftPage() {
    if (page > 1) onChangePage('left');
    else alert('첫번째 페이지 입니다.');
  }
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <button
        onClick={() => { leftPage(); }}
        type="button"
        className="flex items-center"
      >
        <Icon name="OutlineLeft" size="2rem" ariaLabel="이전 페이지로 이동" />
        <span>이전 페이지로</span>
      </button>
      <div className="h-7 w-7 rounded-lg border border-solid border-indigo-500/40 text-center text-lime-800">{page}</div>
      <button onClick={() => { rightPage(); }} type="button" className="flex items-center">
        <span>다음 페이지로</span>
        <Icon name="OutlineRight" size="2rem" ariaLabel="다음 페이지로 이동" />
      </button>
    </div>
  );
}

export default Page;
