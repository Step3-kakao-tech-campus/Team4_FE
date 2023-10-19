import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalType } from '../../types/modal';

interface Modal {
  id: number;
  type: ModalType;
}

const initialState: Modal[] = [];

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    addModal: (state, action: PayloadAction<Modal['type']>) => {
      const type = action.payload;
      const id = state.length;
      return state.concat({
        id,
        type,
      });
    },
    deleteModal: (state) => {
      state.pop();
    },
  },
});

export const { addModal, deleteModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
