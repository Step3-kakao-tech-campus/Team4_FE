import { ModalType } from '../types/modal';
import { addModal, deleteModal } from '../store/slices/modalSlice';
import { useModalDispatch } from './store';

export function useModal(type: ModalType) {
  const dispatch = useModalDispatch();

  const openModal = () => {
    dispatch(addModal(type));
  };
  const closeModal = () => {
    dispatch(deleteModal());
  };

  return { openModal, closeModal };
}
