import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ModalType } from '../types/modal';
import { open, close } from '../store/slices/modalSlice';

export function useModal(type: ModalType) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleModalOpen = () => {
      const { hash } = window.location;
      if (hash === `#${type}`) {
        dispatch(open(type));
      } else {
        dispatch(close(type));
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
