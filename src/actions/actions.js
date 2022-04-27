import * as types from '../constants/ActionTypes';

export const starPrompt = (id) => ({
  type: types.STAR_PROMPT,
  id
});

export const deletePrompt = (id) => ({
  type: types.DELETE_PROMPT,
  id
});
