import * as types from '../constants/ActionTypes';
import { List, Map } from 'immutable';
import { combineReducers } from 'redux';
import { Prompts } from '../data/Settings';

const prompts = (state = List(Prompts), action) => {
  switch (action.type) {
    case types.STAR_PROMPT:
      return state.push(
        Map({
          id: action.id,
          text: action.payload,
          favorite: true
        })
      );

    case types.UNSTAR_PROMPT:
      return state.push(
        Map({
          id: action.id,
          text: action.payload,
          favorite: false
        })
      );

    case types.DELETE_PROMPT:
      return state.filter((prompt) => prompt.get('id') !== action.id);

    default:
      return state;
  }
};

export default combineReducers({
  prompts
});
