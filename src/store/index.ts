import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modalSlice';
import profileReducer from './slices/userProfileState';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type ModalDispatch = typeof store.dispatch;
export type AppDispatch = typeof store.dispatch;
