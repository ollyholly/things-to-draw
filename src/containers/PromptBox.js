import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import {connect} from 'react-redux';
import { addPrompt } from '../actions/actions';
import { v4 as uuidv4 } from 'uuid';


const baseURL = 'http://localhost:3000/api/prompts/generate';

const PromptBox = (props) => {
  const [word, setWord] = useState('');
  const [adjective, setAdjective] = useState('');
  const [noun, setNoun] = useState('');
  const [verb, setVerb] = useState('');

  const getNewPrompt = async () => {
    const result = await axios
      .get(baseURL)
      .then((response) => {
        const { prompt } = response.data;
        setWord(prompt);
        return prompt;
      })

      return result
  };

  useEffect(async () => {
    console.log('HERE', props)
    const prompt = await getNewPrompt();
    setupPrompt(prompt)
  }, []);

  const handleAdjectiveChange = (event) => {
    setAdjective(event.target.value);
  };
  const handleNounChange = (event) => {
    setNoun(event.target.value);
  };
  const handleVerbChange = (event) => {
    setVerb(event.target.value);
  };

  const setupPrompt = (prompt) => {
    const wordArray = prompt.split(' ');
    const adjective = wordArray[0];
    const noun = wordArray[1];
    const verb = wordArray[2];

    setAdjective(adjective);
    setNoun(noun);
    setVerb(verb);

    return `${adjective} ${noun} ${verb}`
  };

  if (!word) return '';

 const {dispatch, gameMode} = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '23ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="adjective"
        variant="standard"
        value={adjective}
        onChange={handleAdjectiveChange}
      />
      <TextField id="noun" variant="standard" value={noun} onChange={handleNounChange} />
      <TextField id="verb" variant="standard" value={verb} onChange={handleVerbChange} />
      <Button variant="contained" onClick={async () => {
        const prompt = await getNewPrompt()
        setupPrompt(prompt)
        dispatch(addPrompt({
          text: prompt,
          id: uuidv4(),
          gameMode: gameMode,
        }))
      }}>
        Get prompt
      </Button>
    </Box>
  );
};

PromptBox.propTypes = {
  gameMode: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  gameMode: state.gameMode
});

export default connect(mapStateToProps)(PromptBox);
