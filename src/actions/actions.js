import * as types from '../constants/ActionTypes';
import axios from 'axios';

const baseURL = 'http://localhost:3000/api/prompts/generate';

export const fetchPrompt = () => (dispatch, getState) => {
  const state = getState()
  console.log('STATE',state)
  dispatch(fetchPromptPending());
  axios({
    method: 'get',
    url: baseURL,
    params: {
      gameMode: state.gameMode
    },
  })
    .then((res) => {
      dispatch(fetchPromptSuccess(res));
    })
    .catch((error) => dispatch(fetchPromptFailed(error)));
};

export const fetchPromptPending = () => ({
  type: types.FETCH_PROMPT_PENDING});

export const fetchPromptSuccess = (response) => ({ 
  type: types.FETCH_PROMPT_SUCCESS, 
  payload: response.data });

export const fetchPromptFailed = (error) => ({ 
  type: types.FETCH_PROMPT_FAILED, 
  payload: error });


export const selectGameMode = (gameMode) => ({
  type: types.SELECT_GAME_MODE,
  payload: gameMode
});
