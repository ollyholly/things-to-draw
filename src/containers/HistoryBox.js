import * as React from 'react';
import {
  Typography,
} from '@mui/material';

import PromptHistoryList from '../components/PromptHistoryList/PromptHistoryList'

const DUMMY_PROMPT_LIST = [
  {
  text: 'white fly singing',
  gameMode: 'Adj + Noun + Verb',
  favorite: false
  },
  {
    text: 'bad lion running',
    gameMode: 'Adj + Noun + Verb',
    favorite: false
  },
  {
    text: 'red crab dancing',
    gameMode: 'Adj + Noun + Verb',
    favorite: true
  }
]


const HistoryBox = () => {
  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        History
      </Typography>
      <PromptHistoryList prompts={DUMMY_PROMPT_LIST}/>
    </>
  );
};

export default HistoryBox;
