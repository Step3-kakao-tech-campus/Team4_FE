import { InputHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { IoCheckmarkSharp } from 'react-icons/io5';

interface RadioOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  optionGroup: string;
}

export default function RadioOption({ labelName, optionGroup, ...props }: RadioOptionProps) {
  const { t } = useTranslation();

  return (
    <label htmlFor={props.id}>
      <input
        className="hidden"
        type="radio"
        name={optionGroup}
        {...props}
      />
      <div className={`flex w-full items-center justify-between ${props.checked ? 'bg-matgpt-lightblue' : ''} cursor-pointer px-6 py-4 
        hover:bg-matgpt-lightblue`}
      >
        {labelName}
        {props.checked && <IoCheckmarkSharp size="1.5rem" aria-label={t('common.selected')} />}
      </div>
    </label>
  );
}
