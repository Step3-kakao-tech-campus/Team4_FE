import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Modal {
  id: number;
  type: 'Language' | 'Login' | 'Search';
}

const initialState: Modal[] = [];

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Modal>) => {
      const { id, type } = action.payload;
      return state.concat({
        id,
        type,
      });
    },
    closeModal: (state, action: PayloadAction<Modal>) => {
      const { id, type } = action.payload;
      return state.filter((current) => !(current.id === id && current.type === type));
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
