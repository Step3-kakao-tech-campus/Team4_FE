import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';
import ModalBackdrop from './modalBackdrop';
import { useModalSelector } from '../../hooks/store';
import LanguageModal from './languageModal';

export default function ModalContainer({ children }: { children: React.ReactNode }) {
  const { type } = useModalSelector((state) => state.modal);

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

    return () => {
      preNode.current?.removeEventListener('keydown', handlePreNodeShiftTab);
      postNode.current?.removeEventListener('keydown', handlePostNodeTab);
    };
  }, [type]);

  if (type === 'Language') {
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

  return (
    <>
      {children}
    </>
  );
}
