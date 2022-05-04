import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { GameModes, WordSets } from '../data/Settings';
import { connect } from 'react-redux';
import { selectGameMode } from '../actions/actions';
import GameModeSelector from '../components/GameModeSelector/GameModeSelector'
import WordSetSelector from '../components/WordSetSelector/WordSetSelector'

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
  const [wordSet, setWordSet] = useState('');

  const handleGameModeChange = (event) => {
    dispatch(selectGameMode(event.target.value));
  };
  const handleWordSetChange = (event) => {
    setWordSet(event.target.value);
  };

  const { dispatch, gameMode } = props;

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Settings
      </Typography>
      <GameModeSelector 
        value={gameMode}
        onChange={handleGameModeChange}
        gameModesList={GameModesList}
      />
      <WordSetSelector 
        value={wordSet}
        onChange={handleWordSetChange}
        wordSetList={WordSetsList}
      />
    </>
  );
};

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gameMode: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  gameMode: state.gameMode
});

export default connect(mapStateToProps)(Settings);
