import { createPortal } from 'react-dom';
import { useModalSelector } from '../../hooks/store';
import { useModal } from '../../hooks/modal';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const modals = useModalSelector((state) => state.modal);
  const { closeModal } = useModal();

  return (
    <>
      {children}
      {modals.map(({ type }) => {
        if (type === 'Language') {
          return createPortal(
            <div>
              Language
              <button type="button" onClick={() => closeModal()}>close</button>
            </div>,
            document.body,
          );
        }
        if (type === 'Login') {
          return createPortal(
            <div>
              Login
              <button type="button" onClick={() => closeModal()}>close</button>
            </div>,
            document.body,
          );
        }
        if (type === 'Search') {
          return createPortal(
            <div>
              Search
              <button type="button" onClick={() => closeModal()}>close</button>
            </div>,
            document.body,
          );
        }

        return null;
      })}
    </>
  );
}
