import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_WORD_PACK } from '../data/Settings';

const initialState = {
  value: DEFAULT_WORD_PACK
};

export const wordPackSlice = createSlice({
  name: 'wordPack',
  initialState,
  reducers: {
    selectWordPack: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { selectWordPack } = wordPackSlice.actions;

export default wordPackSlice.reducer;
