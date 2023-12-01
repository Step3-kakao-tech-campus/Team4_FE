import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ModalBackdrop from './modalBackdrop';
import { useModalSelector } from '../../hooks/store';
import LanguageModal from './languageModal';
import SearchModal from './searchModal';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const { type, isOpen } = useModalSelector((state) => state.modal);
  const location = useLocation();
  const navigate = useNavigate();

  const preNode = useRef<HTMLDivElement>(null);
  const postNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePreNodeShiftTab = (event: KeyboardEvent) => {
      if (event.key === 'Tab' && event.shiftKey) {
        postNode.current?.focus();
      }
    };
    const handlePostNodeTab = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        preNode.current?.focus();
      }
    };

    preNode.current?.addEventListener('keydown', handlePreNodeShiftTab);
    postNode.current?.addEventListener('keydown', handlePostNodeTab);
    preNode.current?.focus();

    return () => {
      preNode.current?.removeEventListener('keydown', handlePreNodeShiftTab);
      postNode.current?.removeEventListener('keydown', handlePostNodeTab);
    };
  }, [type]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (isOpen && event.key === 'Escape') {
        navigate(-1);
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <>
      <div aria-hidden={isOpen}>
        {children}
      </div>

      {(isOpen && type === 'Language' && location.hash === '#Language') ? createPortal(
        <ModalBackdrop>
          <div role="dialog" aria-modal>
            <div ref={preNode} tabIndex={0} />
            <LanguageModal />
            <div ref={postNode} tabIndex={0} />
          </div>
        </ModalBackdrop>,
        document.body,
      ) : null}

      {(isOpen && type === 'Search' && location.hash === '#Search') ? createPortal(
        <ModalBackdrop>
          <div role="dialog" aria-modal>
            <div ref={preNode} tabIndex={0} />
            <SearchModal />
            <div ref={postNode} tabIndex={0} />
          </div>
        </ModalBackdrop>,
        document.body,
      ) : null}
    </>
  );
}
