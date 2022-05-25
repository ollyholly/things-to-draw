import { MenuItem, Typography, Grid } from '@mui/material';
import { gameModesWordPacks } from '../../data/Settings';
import { selectGameMode } from '../../feature/gameModeSlice';
import { selectWordPack } from '../../feature/wordPackSlice';
import GameModeSelector from '../../components/GameModeSelector/GameModeSelector';
import WordPackSelector from '../../components/WordPackSelector/WordPackSelector';
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
      <Grid container m={5}>
        <Grid
          item
          xs={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h6" component="div">
            Settings
          </Typography>
        </Grid>
        <Grid item xs={11}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default SettingsBox;
