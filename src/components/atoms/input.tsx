import {
  useRef, forwardRef, useImperativeHandle, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { GoSearch } from 'react-icons/go';
import { RefHandler } from '../../types/refHandler';

interface InputProps {
  id?: string,
  mode: 'search' | 'singleLine' | 'number' | 'multiLine' | 'password';
  placeholder?: string;
  defaultValue?: string;
  onSearchClick?: React.FormEventHandler<HTMLFormElement>;
  step?: number;
}

const Input = forwardRef<RefHandler, InputProps>((
  {
    id,
    mode,
    placeholder,
    defaultValue,
    onSearchClick = (e) => { e.preventDefault(); },
    step = 1,
  },
  ref,
) => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    getInputValue: () => {
      if (mode === 'search' || mode === 'singleLine' || mode === 'number') {
        return inputRef.current?.value;
      }

      return textareaRef.current?.value;
    },
  }));

  useEffect(() => {
    if (defaultValue) {
      if ((mode === 'search' || mode === 'singleLine') && inputRef.current !== null) {
        inputRef.current.value = defaultValue;
      } else if (mode === 'multiLine' && textareaRef.current !== null) {
        textareaRef.current.value = defaultValue;
      }
    }
  }, []);

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
          placeholder={placeholder}
        />
        <button type="submit">
          <GoSearch size="1.2rem" aria-label={t('input.search')} />
        </button>
      </form>
    );
  }

  if (mode === 'singleLine') {
    return (
      <div className="w-full rounded-full border border-black bg-white px-4 py-2">
        <input
          id={id}
          type="text"
          ref={inputRef}
          className="w-full focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    );
  }

  if (mode === 'password') {
    return (
      <div className="w-full rounded-full border border-black bg-white px-4 py-2">
        <input
          id={id}
          type="password"
          ref={inputRef}
          className="w-full focus:outline-none"
          placeholder={placeholder}
        />
      </div>
    );
  }

  if (mode === 'number') {
    return (
      <div className="w-full rounded-full border border-black bg-white px-4 py-2">
        <input
          type="number"
          ref={inputRef}
          className="w-full focus:outline-none"
          placeholder={placeholder}
          min={0}
          inputMode="numeric"
          pattern="[0-9]*"
          step={step}
        />
      </div>
    );
  }

  if (mode === 'multiLine') {
    return (
      <textarea
        ref={textareaRef}
        className="h-full w-full resize-none rounded-xl border border-matgpt-gray p-4"
        placeholder={placeholder}
      />
    );
  }

  return null;
});

export default Input;
