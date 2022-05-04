import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { GameModes, WordSets } from '../data/Settings';
// import { GameModes, Timers, WordSets } from '../data/Settings';
import { connect } from 'react-redux';
import { selectGameMode } from '../actions/actions';

const GameModesList = GameModes.map((mode, i) => (
  <MenuItem value={mode} key={i}>
    {mode}
  </MenuItem>
));
const WordSetsList = WordSets.map((wordSet, i) => (
  <MenuItem value={wordSet} key={i}>
    {wordSet}
  </MenuItem>
));

const Settings = (props) => {
  
  const [gameMode, setGameMode] = useState('');
  const [wordSet, setWordSet] = useState('');

  const handleGameModeChange = (event) => {
    setGameMode(event.target.value);
    dispatch(selectGameMode(event.target.value));
  };
  const handleWordSetChange = (event) => {
    setWordSet(event.target.value);
  };

  const { dispatch } = props;

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Settings
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="game-mode-select-label">Game Mode</InputLabel>
        <Select
          labelId="game-mode-select-label"
          id="demo-simple-select-helper"
          value={gameMode}
          label="Game Mode"
          onChange={handleGameModeChange}
        >
          {GameModesList}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="word-set-select-helper-label">Word Set</InputLabel>
        <Select
          labelId="word-set-select-helper-label"
          id="word-set-select-helper"
          value={wordSet}
          label="WordSet"
          onChange={handleWordSetChange}
        >
          {WordSetsList}
        </Select>
      </FormControl>
      
    </>
  );
};

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  gameMode: state.gameMode
});

export default connect(mapStateToProps)(Settings)
