import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { [key: string]: number } = {
};

export const promptMenuSlice = createSlice({
  name: 'promptMenu',
  initialState,
  reducers: {

    MenuNumber: (state, action: PayloadAction<{
      menu: string, newNumber: number
    }>) => {
      console.log(action.payload.newNumber); return ({
        ...state,
        [action.payload.menu]: action.payload.newNumber,
      });
    },

    AddMenu: (state, action: PayloadAction<{
      menu: string,
    }>) => ({
      ...state,
      [action.payload.menu]: 1,
    }),

    DeleteMenu: (state, action: PayloadAction<{
      menu: string,
    }>) => {
      const newPrompts: { [key: string]: number } = {};
      Object.keys(state).map((key) => {
        if (key !== action.payload.menu) {
          newPrompts[key] = state[key];
        }
        return ({ ...newPrompts });
      });
    },

    resetMenu: () => ({

    }),

  },
});

export const {
  MenuNumber, AddMenu, DeleteMenu, resetMenu,
} = promptMenuSlice.actions;
export const promptMenuReducer = promptMenuSlice.reducer;
