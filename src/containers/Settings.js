import * as React from 'react';
import { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem,  } from '@mui/material';
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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Game Mode</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gameMode}
          label="Game Mode"
          onChange={handleGameModeChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
            {GameModesList}
        </Select>
        
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Word Set</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={wordSet}
          label="WordSet"
          onChange={handleWordSetChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {WordSetsList}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={timer}
          label="Timer"
          onChange={handleTimerChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {TimersLists}
        </Select>
      </FormControl>
    </div>
  );
};

export default Settings;
