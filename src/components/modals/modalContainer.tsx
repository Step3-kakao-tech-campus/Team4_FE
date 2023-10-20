import { createPortal } from 'react-dom';
import ModalBackdrop from './modalBackdrop';
import { useModalSelector } from '../../hooks/store';
import LanguageModal from './languageModal';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const { type } = useModalSelector((state) => state.modal);

  if (type === 'Language') {
    return (
      <>
        <div aria-hidden>
          {children}
        </div>
        {createPortal(
          <ModalBackdrop>
            <LanguageModal />
          </ModalBackdrop>,
          document.body,
        )}
      </>
    );
  }

  return (
    <>
      {children}
    </>
  );
}
