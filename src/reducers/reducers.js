import * as types from '../constants/ActionTypes';
// import { List } from 'immutable';
import { combineReducers } from 'redux';
import { Prompts } from '../data/Settings';


const prompts = (state = Prompts, action) => {
  switch (action.type) {
    case types.STAR_PROMPT:
      return state.map(prompt => {
        if (prompt.id === action.id) {
          return {...prompt, favorite: !prompt.favorite}
        }
        return prompt;
      });

    case types.DELETE_PROMPT:
      return state.filter((prompt) => prompt.id !== action.id);

    default:
      return state;
  }
};

export default combineReducers({
  prompts
});
