import * as types from '../constants/ActionTypes';

export const startPrompt = (id) => ({
  type: types.STAR_PROMPT,
  payload: id
});

export const unstartPrompt = (id) => ({
  type: types.UNSTAR_PROMPT,
  payload: id
});

export const deletePrompt = (id) => ({
  type: types.DELETE_PROMPT,
  payload: id
});
