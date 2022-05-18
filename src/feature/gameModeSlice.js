import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_GAME_MODE = 'Adjective + Noun + Verb';

const initialState = {
  value: DEFAULT_GAME_MODE
};

export const gameModeSlice = createSlice({
  name: 'gameMode',
  initialState,
  reducers: {
    selectGameMode: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { selectGameMode } = gameModeSlice.actions;

export default gameModeSlice.reducer;
