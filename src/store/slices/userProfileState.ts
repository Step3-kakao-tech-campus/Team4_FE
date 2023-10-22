import type { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { createSlice } from '@reduxjs/toolkit';
import { ProfileEditInfo, ProfileInfo } from '../../types/profile';

const initialState: ProfileInfo = {
  language: '',
  gender: '',
  nickname: '',
  profileImage: '/image/fakeDb/userPage/userImage.png',
};

const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    editProfile: (state, action: PayloadAction<ProfileEditInfo>) => ({
      ...state,
      ...action.payload,
    }),
    edieProfileImage: (state, action: PayloadAction<string>) => ({
      ...state,
      profileImage: action.payload,
    }),
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

export const {
  editProfile, editLanuage, editGender, editNickname,
} = profileSlice.actions;
export default profileSlice.reducer;
