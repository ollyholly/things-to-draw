import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';
import { Prompts } from '../data/Settings';

const DEFAULT_GAME_MODE = 'Adjective + Noun + Verb'

const prompts = (state = Prompts, action) => {
  switch (action.type) {
    case types.ADD_PROMPT:
      return [{
        id: action.id,
        text: action.text,
        gameMode: action.gameMode,
        createdAt: action.createdAt,
        favorite: action.favorite
      }, ...state];

    case types.STAR_PROMPT:
      return state.map((prompt) => {
        if (prompt.id === action.id) {
          return { ...prompt, favorite: !prompt.favorite };
        }
        return prompt;
      });

    case types.DELETE_PROMPT:
      return state.filter((prompt) => prompt.id !== action.id);

    default:
      return state;
  }
};

const gameMode = (state = DEFAULT_GAME_MODE, action) => {
  switch (action.type) {
    case types.SELECT_GAME_MODE:
      return action.gameMode

    default:
      return state;
  }
};

export default combineReducers({
  prompts,
  gameMode
});
