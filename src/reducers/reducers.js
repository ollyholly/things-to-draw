import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';
import { Prompts } from '../data/Settings';

const initialStatePrompt = {
  id: '',
  text: '',
  gameMode: '',
  createdAt: '',
  favorite: false,
  isPending: false,
  error: ''
};

const promptsHistory = (state = Prompts, action) => {
  switch (action.type) {
    // case types.FETCH_PROMPTS_HISTORY:
    //   return [{
    //     id: action.id,
    //     text: action.text,
    //     gameMode: action.gameMode,
    //     createdAt: action.createdAt,
    //     favorite: action.favorite
    //   }, ...state];
    case types.ADD_PROMPT:
      return [
        {
          id: action.payload.id,
          text: action.payload.prompt,
          gameMode: action.payload.gameMode,
          createdAt: action.payload.createdAt,
          favorite: action.payload.favorite
        },
        ...state
      ];

    case types.STAR_PROMPT:
      return state.map((prompt) => {
        if (prompt.id === action.payload) {
          return { ...prompt, favorite: !prompt.favorite };
        }
        return prompt;
      });

    case types.DELETE_PROMPT:
      return state.filter((prompt) => prompt.id !== action.payload);

    default:
      return state;
  }
};

const prompt = (state = initialStatePrompt, action = {}) => {
  switch (action.type) {
    case types.FETCH_PROMPT_PENDING:
      return {
        ...state,
      };
    case types.FETCH_PROMPT_SUCCESS:
      return {
        ...state,
        text: action.payload.prompt,
        adjective: action.payload.adjective,
        noun: action.payload.noun,
        verb: action.payload.verb,
        isPending: false
      };
    case types.FETCH_PROMPT_FAILED:
      return { ...state, isPending: false, error: action.error };

    default:
      return state;
  }
};

const initialGameMode = 'Adjective + Noun + Verb';

const gameMode = (state = initialGameMode, action) => {
  switch (action.type) {
    case types.SELECT_GAME_MODE:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  prompt,
  promptsHistory,
  gameMode
});
