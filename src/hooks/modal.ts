import { ModalType } from '../types/modal';
import { addModal, deleteModal } from '../store/slices/modalSlice';
import { useModalDispatch } from './store';

export function useModal() {
  const dispatch = useModalDispatch();

  const openModal = (type: ModalType) => {
    dispatch(addModal(type));
    window.history.pushState({ modalType: type }, '');
  };
  const closeModal = () => {
    dispatch(deleteModal());
  };

  return { openModal, closeModal };
}
