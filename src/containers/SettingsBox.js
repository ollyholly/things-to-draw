import * as React from 'react';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
import { MenuItem, Typography } from '@mui/material';
import { GameModes, WordPacks } from '../data/Settings';
// import { connect } from 'react-redux';
import { selectGameMode } from '../feature/gameModeSlice';
import { selectWordPack } from '../feature/wordPackSlice';
// import { selectGameMode, selectWordPack } from '../actions/actions';
import GameModeSelector from '../components/GameModeSelector/GameModeSelector';
import WordPackSelector from '../components/WordPackSelector/WordPackSelector';
import { useDispatch, useSelector } from 'react-redux';

const GameModesList = GameModes.map((mode, i) => (
  <MenuItem value={mode} key={i}>
    {mode}
  </MenuItem>
));
const WordPacksList = WordPacks.map((wordPack, i) => (
  <MenuItem value={wordPack} key={i}>
    {wordPack}
  </MenuItem>
));

const SettingsBox = () => {
  const gameMode = useSelector((state) => state.gameMode.value);
  const wordPack = useSelector((state) => state.wordPack.value);
  const dispatch = useDispatch();
  // const [wordSet, setWordSet] = useState('');
  console.log('gameMode', gameMode);

  const handleGameModeChange = (event) => {
    dispatch(selectGameMode(event.target.value));
  };
  const handleWordPackChange = (event) => {
    dispatch(selectWordPack(event.target.value));
    // setWordSet(event.target.value);
  };

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
      <WordPackSelector
        value={wordPack}
        onChange={handleWordPackChange}
        wordPackList={WordPacksList}
      />
    </>
  );
};

// SettingsBox.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   // gameMode: PropTypes.string.isRequired,
//   wordPack: PropTypes.string.isRequired
// };

// const mapStateToProps = (state) => ({
//   gameMode: state.gameMode,
//   wordPack: state.wordPack
// });

export default SettingsBox;

// export default connect(mapStateToProps)(SettingsBox);
