import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RedirectUrl {
  url: string,
}

const initialState: RedirectUrl = {
  url: '',
};

const redirectUrlSlice = createSlice({
  name: 'RedirectUrl',
  initialState,
  reducers: {
    editRedirectUrl: (state, action: PayloadAction<RedirectUrl>) => ({
      url: action.payload.url,
    }),
  },
});

export const {
  editRedirectUrl,
} = redirectUrlSlice.actions;
export const redirectUrlReducer = redirectUrlSlice.reducer;
