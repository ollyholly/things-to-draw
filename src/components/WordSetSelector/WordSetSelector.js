import * as React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, InputLabel } from '@mui/material';

const WordSetSelector = (props) => {
  const { value, onChange, wordSetList } = props;
  return (
    <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="word-set-select-helper-label">Word Set</InputLabel>
        <Select
          labelId="word-set-select-helper-label"
          id="word-set-select-helper"
          value={value}
          label="WordsSet"
          onChange={onChange}
        >
          {wordSetList}
        </Select>
      </FormControl>
  );
};

WordSetSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  wordSetList: PropTypes.array.isRequired
};

export default WordSetSelector;
