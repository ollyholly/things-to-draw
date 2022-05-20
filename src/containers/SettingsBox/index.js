import * as React from 'react';
import { MenuItem, Typography } from '@mui/material';
import { gameModesWordPacks } from '../../data/Settings';
import { selectGameMode } from '../../feature/gameModeSlice';
import { selectWordPack } from '../../feature/wordPackSlice';
import GameModeSelector from '../../components/GameModeSelector';
import WordPackSelector from '../../components/WordPackSelector';
import { useDispatch, useSelector } from 'react-redux';

const SettingsBox = () => {
  const gameMode = useSelector((state) => state.gameMode.value);
  const wordPack = useSelector((state) => state.wordPack.value);
  const dispatch = useDispatch();

  const GameModesList = Object.keys(gameModesWordPacks).map((mode, i) => (
    <MenuItem value={mode} key={i}>
      {mode}
    </MenuItem>
  ));

  const WordPacksList = gameModesWordPacks[gameMode].map((wordPack, i) => (
    <MenuItem value={wordPack} key={i}>
      {wordPack}
    </MenuItem>
  ));

  const handleGameModeChange = (event) => {
    dispatch(selectGameMode(event.target.value));
  };
  const handleWordPackChange = (event) => {
    dispatch(selectWordPack(event.target.value));
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

export default SettingsBox;
