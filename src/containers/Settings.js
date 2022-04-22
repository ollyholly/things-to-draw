import * as React from 'react';
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem,  Typography} from '@mui/material';
import {GameModes, Timers, WordSets} from '../data/Settings'


const GameModesList = GameModes.map((mode, i) => <MenuItem value={mode} key={i}>{mode}</MenuItem>)
const TimersLists = Timers.map((timer, i) => <MenuItem value={timer} key={i}>{timer}</MenuItem>)
const WordSetsList = WordSets.map((wordSet, i) => <MenuItem value={wordSet} key={i}>{wordSet}</MenuItem>)

const Settings = () => {
  const [gameMode, setGameMode] = useState('');
  const [timer, setTimer] = useState('');
  const [wordSet, setWordSet] = useState('');

  const handleGameModeChange = (event) => {
    setGameMode(event.target.value);
  };
  const handleTimerChange = (event) => {
    setTimer(event.target.value);
  };
  const handleWordSetChange = (event) => {
    setWordSet(event.target.value);
  };
  return (
    <div>
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
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Timer</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={timer}
          label="Timer"
          onChange={handleTimerChange}
        >
          {TimersLists}
        </Select>
      </FormControl>
    </div>
  );
};

export default Settings;
