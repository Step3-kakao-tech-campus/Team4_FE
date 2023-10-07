import {
  useRef, forwardRef, useImperativeHandle,
} from 'react';
import { useTranslation } from 'react-i18next';
import { GoSearch } from 'react-icons/go';
import { RefHandler } from '../../types/refHandler';

interface InputProps {
  mode: 'search' | 'singleLine' | 'multiLine';
  onSearchClick? : React.FormEventHandler<HTMLFormElement>;
}

const Input = forwardRef<RefHandler, InputProps>((
  {
    mode,
    onSearchClick = (e) => { e.preventDefault(); },
  },
  ref,
) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    getInputValue: () => {
      if (mode === 'search' || mode === 'singleLine') {
        return inputRef.current?.value;
      }

      return textareaRef.current?.value;
    },
  }));

  if (mode === 'search') {
    return (
      <form
        className="flex w-full items-center justify-center rounded-full bg-white px-4 py-2"
        onSubmit={onSearchClick}
      >
        <input
          type="text"
          ref={inputRef}
          className="w-full focus:outline-none"
        />
        <button type="submit">
          <GoSearch size="1.2rem" aria-label={t('input.search')} />
        </button>
      </form>
    );
  }

  if (mode === 'singleLine') {
    return (
      <input
        type="text"
        ref={inputRef}
        className="w-full focus:outline-none"
      />
    );
  }

  if (mode === 'multiLine') {
    return (
      <textarea
        ref={textareaRef}
        className="w-full focus:outline-none"
      />
    );
  }

  return (
    <>
    </>
  );
});

export default Input;
