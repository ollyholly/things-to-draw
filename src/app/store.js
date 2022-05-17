import { configureStore } from '@reduxjs/toolkit';
import promptReducer from '../feature/promptSlice';
import gameModeReducer from '../feature/gameModeSlice';
import wordPackReducer from '../feature/wordPackSlice';
import logger from 'redux-logger';

export default configureStore({
  reducer: {
    prompt: promptReducer,
    gameMode: gameModeReducer,
    wordPack: wordPackReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});
