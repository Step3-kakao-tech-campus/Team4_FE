import { InputHTMLAttributes } from 'react';

interface RadioOptionProps extends InputHTMLAttributes<HTMLInputElement> {
  labelName: string;
  optionGroup: string;
  id?: string;
}

export default function RadioOption({
  labelName, optionGroup, id, ...props
}: RadioOptionProps) {
  return (
    <label htmlFor={id}>
      <div className="flex w-full cursor-pointer items-center justify-between px-6 py-4
        hover:bg-matgpt-lightblue"
      >
        {labelName}
        <input
          type="radio"
          name={optionGroup}
          id={id}
          {...props}
        />
      </div>
    </label>
  );
}
