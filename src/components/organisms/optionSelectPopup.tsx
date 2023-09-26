import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import RadioOption from '../molecules/radioOption';
import { Option } from '../../types/option';

interface OptionListProps {
  options: Option[];
  optionGroup: string;
  onOptionSelect: React.FormEventHandler<HTMLFormElement>
}

const OptionSelectPopup = forwardRef<HTMLDialogElement, OptionListProps>(({
  options,
  optionGroup,
  onOptionSelect,
}, ref) => {
  const { t } = useTranslation();

  return (
    <dialog
      ref={ref}
      className="relative mb-0 h-[50vh] w-full max-w-[500px] rounded-t-2xl
      backdrop:bg-matgpt-gray/50"
    >
      <form onSubmit={onOptionSelect}>
        <section>
          <h1 className="py-2">{t('landingPage.languageSelect')}</h1>
          <ul className="max-h-[calc(50vh-6rem)] overflow-y-auto">
            {options.map(({ name, value }) => (
              <li key={value}>
                <RadioOption
                  labelName={name}
                  optionGroup={optionGroup}
                  value={value}
                />
              </li>
            ))}
          </ul>
        </section>
        <button
          type="submit"
          className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-[500px]
          border-t border-t-matgpt-gray/50 bg-white py-4"
        >
          {t('landingPage.save')}
        </button>
      </form>
    </dialog>
  );
});

export default OptionSelectPopup;
