import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ModalDispatch, RootState } from '../store';

export const useModalDispatch: () => ModalDispatch = useDispatch;
export const useModalSelector: TypedUseSelectorHook<RootState> = useSelector;
