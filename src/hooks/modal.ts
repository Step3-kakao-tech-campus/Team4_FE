import { useEffect } from 'react';
import { ModalType } from '../types/modal';
import { open, close } from '../store/slices/modalSlice';
import { useModalDispatch } from './store';

export function useModal(type: ModalType) {
  const dispatch = useModalDispatch();

  useEffect(() => {
    const handleModalOpen = () => {
      const { hash } = window.location;
      if (hash === `#${type}`) {
        dispatch(open(type));
      } else {
        dispatch(close());
      }
    };
    window.addEventListener('hashchange', handleModalOpen);

    return () => window.removeEventListener('hashchange', handleModalOpen);
  }, [type]);

  const openModal = () => {
    window.location.hash = type;
  };

  return { openModal };
}
