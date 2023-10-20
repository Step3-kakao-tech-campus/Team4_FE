import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalType } from '../../types/modal';

interface Modal {
  type: ModalType | null;
}

const initialState: Modal = {
  type: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<Modal['type']>) => ({
      type: action.payload,
    }),
    close: () => ({
      type: null,
    }),
  },
});

export const { open, close } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
