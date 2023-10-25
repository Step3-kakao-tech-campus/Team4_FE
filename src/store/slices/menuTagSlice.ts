import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReviewImageTagInfo } from '../../types/review';

const initialState: ReviewImageTagInfo[] = [];

export const menuTagSlice = createSlice({
  name: 'menuTag',
  initialState,
  reducers: {
    addMenuTag: (state, action: PayloadAction<{
      imageIndex: number,
      locationX: number,
      locationY: number
    }>) => {
      state.push({
        tagIndex: state.length > 0 ? state[state.length - 1].tagIndex + 1 : 0,
        name: '',
        imageIndex: action.payload.imageIndex,
        locationX: action.payload.locationX,
        locationY: action.payload.locationY,
      });
    },
    removeMenuTag: (
      state,
      action: PayloadAction<{ tagIndex: number }>,
    ) => state.filter((tag) => tag.tagIndex !== action.payload.tagIndex),
    removeAllMenuTagFromCurrentImage: (
      state,
      action: PayloadAction<{ imageIndex: number }>,
    ) => state.filter((tag) => tag.imageIndex !== action.payload.imageIndex),
  },
});

export const { addMenuTag, removeMenuTag, removeAllMenuTagFromCurrentImage } = menuTagSlice.actions;
export const menuTagReducer = menuTagSlice.reducer;
