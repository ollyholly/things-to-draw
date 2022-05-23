import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'http://localhost:3000/api/prompts/generate';

export const fetchPrompt = createAsyncThunk(
  'prompt/fetchPrompt',
  async (arg, { getState, rejectWithValue }) => {
    const state = getState();
    try {
      const response = await axios({
        method: 'get',
        url: baseURL,
        params: {
          gameMode: state.gameMode.value,
          wordPack: state.wordPack.value
        }
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const promptSlice = createSlice({
  name: 'prompt',
  initialState: {
    value: {},
    isPending: false,
    error: ''
  },
  extraReducers: {
    [fetchPrompt.pending]: (state) => {
      state.isPending = true;
    },
    [fetchPrompt.fulfilled]: (state, action) => {
      state.isPending = false;
      state.value = {
        ...action.payload
      };
    },
    [fetchPrompt.rejected]: (state, action) => {
      state.error = action.payload.message;
    }
  }
});

export default promptSlice.reducer;
