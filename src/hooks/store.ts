import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

export const useModalSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useMenuTagSelector: TypedUseSelectorHook<RootState> = useSelector;
