import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useModalSelector } from '../../hooks/store';
import { useModal } from '../../hooks/modal';
import ModalBackdrop from './modalBackdrop';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const modals = useModalSelector((state) => state.modal);
  const { closeModal } = useModal();

  useEffect(() => {
    const closeWhenBack = () => {
      if (modals.length > 0) {
        closeModal();
      }
    };
    window.addEventListener('popstate', closeWhenBack);

    return () => window.removeEventListener('popstate', closeWhenBack);
  }, [modals]);

  return (
    <>
      {children}
      {modals.map(({ type }) => {
        if (type === 'Language') {
          return createPortal(
            <ModalBackdrop>
              <div>
                Language
                <button type="button" onClick={() => closeModal()}>close</button>
              </div>
            </ModalBackdrop>,
            document.body,
          );
        }
        if (type === 'Login') {
          return createPortal(
            <ModalBackdrop>
              <div>
                Login
                <button type="button" onClick={() => closeModal()}>close</button>
              </div>
            </ModalBackdrop>,
            document.body,
          );
        }
        if (type === 'Search') {
          return createPortal(
            <ModalBackdrop>
              <div>
                Search
                <button type="button" onClick={() => closeModal()}>close</button>
              </div>
            </ModalBackdrop>,
            document.body,
          );
        }

        return null;
      })}
    </>
  );
}
