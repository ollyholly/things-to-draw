import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const DEFAULT_GAME_MODE = 'Adjective + Noun + Verb';

const initialPromptState = {
  prompt: {
    id: '',
    text: '',
    gameMode: '',
    createdAt: '',
    favorite: false
  },
  isPending: false,
  error: ''
};

const promptReducer = (state = initialPromptState, action = {}) => {
  switch (action.type) {
    case types.FETCH_PROMPT_PENDING:
      return {
        ...state,
        isPending: true
      };
    case types.FETCH_PROMPT_SUCCESS:
      return {
        ...state,
        prompt: {
          ...action.payload,
          emotion: 'happy',
          style: 'Picasso',
          noun2: 'dinosaur',
          environment: 'in a forest'
        },
        isPending: false
      };
    case types.FETCH_PROMPT_FAILED:
      return { ...state, error: action.error, isPending: false };

    default:
      return state;
  }
};

const initialGameModeState = DEFAULT_GAME_MODE;

const gameModeReducer = (state = initialGameModeState, action) => {
  switch (action.type) {
    case types.SELECT_GAME_MODE:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  prompt: promptReducer,
  gameMode: gameModeReducer
});
