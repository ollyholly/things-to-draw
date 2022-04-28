import * as types from '../constants/ActionTypes';

export const addPrompt = ({ text, gameMode, id }) => ({
  type: types.ADD_PROMPT,
  id,
  text,
  gameMode,
  createdAt: Date.now,
  favorite: false
});

export const starPrompt = (id) => ({
  type: types.STAR_PROMPT,
  id
});


export const deletePrompt = (id) => ({
  type: types.DELETE_PROMPT,
  id
});

export const selectGameMode = (gameMode) => ({
  type: types.SELECT_GAME_MODE,
  gameMode
});