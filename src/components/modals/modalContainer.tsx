import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ModalBackdrop from './modalBackdrop';
import { useModalSelector } from '../../hooks/store';
import LanguageModal from './languageModal';
import SocialLoginModalContent from './socialLoginModalContent';
import SearchModal from './searchModal';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const { type } = useModalSelector((state) => state.modal);
  const location = useLocation();

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
      if (event.key === 'Escape') {
        window.location.hash = '';
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  if (type === 'Language' && location.hash === '#Language') {
    return (
      <>
        <div aria-hidden>
          {children}
        </div>
        {createPortal(
          <ModalBackdrop>
            <div role="dialog" aria-modal>
              <div ref={preNode} tabIndex={0} />
              <LanguageModal />
              <div ref={postNode} tabIndex={0} />
            </div>
          </ModalBackdrop>,
          document.body,
        )}
      </>
    );
  }

  if (type === 'Login' && location.hash === '#Login') {
    return (
      <>
        <div aria-hidden>
          {children}
        </div>
        {createPortal(
          <ModalBackdrop>
            <div role="dialog" aria-modal>
              <div ref={preNode} tabIndex={0} />
              <SocialLoginModalContent />
              <div ref={postNode} tabIndex={0} />
            </div>
          </ModalBackdrop>,
          document.body,
        )}
      </>
    );
  }

  if (type === 'Search' && location.hash === '#Search') {
    return (
      <>
        <div aria-hidden>
          {children}
        </div>
        {createPortal(
          <ModalBackdrop>
            <div role="dialog" aria-modal>
              <div ref={preNode} tabIndex={0} />
              <SearchModal />
              <div ref={postNode} tabIndex={0} />
            </div>
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
