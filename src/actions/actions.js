import * as types from '../constants/ActionTypes';
// const x = { text, gameMode, id }
import axios from 'axios';

const baseURL = 'http://localhost:3000/api/prompts/generate';

export const fetchPrompt =  () => (dispatch) => {
  dispatch({type: types.FETCH_PROMPT_PENDING, prompt: '',
    adjective: '',
    noun: '',
    verb: ''})
    axios.get(baseURL)
    .then(res => {
      const { prompt, adjective, noun, verb } = res.data;
      return dispatch({type: types.FETCH_PROMPT_SUCCESS,
        prompt,
        adjective,
        noun,
        verb
        })
    }).catch(error => dispatch({type: types.FETCH_PROMPT_FAILED, payload: error}))

  
}

// export const fetchPromptHistory = ({ text, gameMode, id }) => ({
//   type: types.FETCH_PROMPTS_HISTORY,
//   id,
//   text,
//   gameMode,
//   createdAt: Date.now,
//   favorite: false
// });

export const addPrompt = ({ text, gameMode, id, createdAt, favorite}) => ({
  type: types.ADD_PROMPT,
  id,
  text,
  gameMode,
  createdAt,
  favorite
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
