import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modalSlice';
import profileReducer from './slices/userProfileState';
import { menuTagReducer } from './slices/menuTagSlice';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    profile: profileReducer,
    menuTag: menuTagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
