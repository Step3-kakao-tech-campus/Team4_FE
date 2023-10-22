import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalType } from '../../types/modal';

interface Modal {
  type: ModalType | null;
  isOpen: boolean
}

const initialState: Modal = {
  type: null,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Modal['type']>) => ({
      type: action.payload,
      isOpen: true,
    }),
    close: () => ({
      type: null,
      isOpen: false,
    }),
  },
});

export const { open, close } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
