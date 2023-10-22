import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import profileReducer from './slice/userProfileState';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
