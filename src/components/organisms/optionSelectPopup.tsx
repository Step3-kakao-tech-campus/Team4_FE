import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import RadioOption from '../molecules/radioOption';

interface OptionListProps {
  optionNames: string[];
  optionGroup: string;
  onOptionSelect: React.MouseEventHandler<HTMLInputElement>
  closeModal: React.MouseEventHandler<HTMLButtonElement>
}

const OptionSelectPopup = forwardRef<HTMLDialogElement, OptionListProps>(({
  optionNames,
  optionGroup,
  onOptionSelect,
  closeModal,
}, ref) => {
  const { t } = useTranslation();

  return (
    <dialog
      ref={ref}
      className="relative mb-0 h-[50vh] w-full max-w-[500px] justify-between rounded-t-2xl
      backdrop:bg-matgpt-gray/50"
    >
      <section>
        <h1 className="py-2">{t('landingPage.languageSelect')}</h1>
        <ul className="max-h-[calc(50vh-6rem)] overflow-y-auto">
          {optionNames.map((optionName) => (
            <li key={optionName}>
              <RadioOption
                labelName={optionName}
                optionGroup={optionGroup}
                onClick={onOptionSelect}
              />
            </li>
          ))}
        </ul>
      </section>
      <button
        type="button"
        onClick={closeModal}
        className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-[500px]
          border-t border-t-matgpt-gray/50 bg-white py-4"
      >
        {t('landingPage.close')}
      </button>
    </dialog>
  );
});

export default OptionSelectPopup;
