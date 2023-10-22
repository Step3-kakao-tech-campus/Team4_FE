import type { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from '@reduxjs/toolkit/dist/createSlice';
import { ProfileEditInfo } from '../../types/profile';

const initialState: ProfileEditInfo = {
  language: '',
  gender: '',
  nickname: '',
};

const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    editLanuage: (state, action: PayloadAction<string>) => ({
      ...state,
      language: action.payload,
    }),
    editGender: (state, action: PayloadAction<string>) => ({
      ...state,
      gender: action.payload,
    }),
    editNickname: (state, action: PayloadAction<string>) => ({
      ...state,
      nickname: action.payload,
    }),
  },
});

export const { editLanuage, editGender, editNickname } = profileSlice.actions;
export default profileSlice.reducer;
