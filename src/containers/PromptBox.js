import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';

const baseURL = 'http://localhost:3000/api/generate/prompt';

const PromptBox = () => {
  const [word, setWord] = useState(null);
  const [adjective, setAdjective] = useState(null);
  const [noun, setNoun] = useState(null);
  const [verb, setVerb] = useState(null);

  const getNewWord = () => {
    axios
      .get(baseURL)
      .then((response) => {
        setWord(response.data.randomPrompt);
        return response.data.randomPrompt;
      })
      .then((word) => getPOS(word));
  };

  useEffect(() => {
    getNewWord();
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

  const getPOS = (prompt) => {
    const wordArray = prompt.split(' ');
    const adjective = wordArray[0];
    const noun = wordArray[1];
    const verb = wordArray[2];

    setAdjective(adjective);
    setNoun(noun);
    setVerb(verb);
  };

  if (!word) return null;

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
        variant="outlined"
        value={adjective}
        onChange={handleAdjectiveChange}
      />
      <TextField id="noun" variant="outlined" value={noun} onChange={handleNounChange} />
      <TextField id="verb" variant="outlined" value={verb} onChange={handleVerbChange} />
      <Button variant="contained" onClick={getNewWord}>
        Get word
      </Button>
    </Box>
  );
};

export default PromptBox;
