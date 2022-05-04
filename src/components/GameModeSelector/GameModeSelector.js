import * as React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, InputLabel } from '@mui/material';

const GameModeSelector = (props) => {
  const { value, onChange, gameModesList } = props;
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="game-mode-select-label">Game Mode</InputLabel>
        <Select
          labelId="game-mode-select-label"
          id="demo-simple-select-helper"
          value={value}
          label="Game Mode"
          onChange={onChange}
        >
          {gameModesList}
        </Select>
      </FormControl>
  );
};

GameModeSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  gameModesList: PropTypes.array.isRequired
};

export default GameModeSelector;
