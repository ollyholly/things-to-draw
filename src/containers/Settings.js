import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Paper, FormControl, InputLabel, Select, MenuItem, Typography, Chip } from '@mui/material';
import { GameModes, WordSets } from '../data/Settings';
// import { GameModes, Timers, WordSets } from '../data/Settings';
import { connect } from 'react-redux';
import { selectGameMode } from '../actions/actions';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));



const GameModesList = GameModes.map((mode, i) => (
  <MenuItem value={mode} key={i}>
    {mode}
  </MenuItem>
));
// const TimersLists = Timers.map((timer, i) => (
//   <MenuItem value={timer} key={i}>
//     {timer}
//   </MenuItem>
// ));
const WordSetsList = WordSets.map((wordSet, i) => (
  <MenuItem value={wordSet} key={i}>
    {wordSet}
  </MenuItem>
));

const Settings = (props) => {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React'},
    { key: 4, label: 'Vue.js'},
  ]);

  const [selectedChips, setSelected] = useState([])

  const handleSelect = (chipToSelect) => () => {
    console.log('OLD SELECTED', selectedChips)
    // console.log(chipToSelect)
    setChipData([...chipData])
    // setSelected([...selectedChips, chipToSelect])
    if (selectedChips.find((e) => e === chipToSelect)) {
      const index = selectedChips.findIndex((e) => e === chipToSelect);
      let arr = [...selectedChips];
      arr.splice(index, 1);
      setSelected(arr);
    } else {
      setSelected([...selectedChips, chipToSelect]);
    }
    console.log('NEW SELECTED', selectedChips)
    // setChipData((chips) => chips.filter((chip) => chip.key !== chipToSelect.key));
  };
  const [gameMode, setGameMode] = useState('');
  const [wordSet, setWordSet] = useState('');

  const handleGameModeChange = (event) => {
    setGameMode(event.target.value);
    dispatch(selectGameMode(event.target.value));
  };
  // const handleTimerChange = (event) => {
  //   setTimer(event.target.value);
  // };
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
      <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((chip) => {

      const selected = selectedChips.includes(chip);

        return (
          <ListItem key={chip.key}>
            <Chip
              label={chip.label}
              color={selected ? 'primary' : 'default'}
              selected={selected}
              onClick={handleSelect(chip)}
              clickable
            />
          </ListItem>
        );
      })}
    </Paper>
      {/* <FormControl sx={{ m: 1, minWidth: 200 }}>
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
      </FormControl> */}
    </>
  );
};

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired,
  // classes: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  gameMode: state.gameMode
});

export default connect(mapStateToProps)(Settings)
