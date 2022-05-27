import PropTypes from 'prop-types';
import { FormControl, Select, InputLabel } from '@mui/material';

const WordPackSelector = (props) => {
  const { value, onChange, wordPackList } = props;
  return (
    <FormControl sx={{ minWidth: 250, m:1 }} >
      <InputLabel id="word-pack-select-helper-label">Word Pack</InputLabel>
      <Select
        labelId="word-pack-select-helper-label"
        id="word-pack-select-helper"
        value={value}
        label="WordPack"
        onChange={onChange}
      >
        {wordPackList}
      </Select>
    </FormControl>
  );
};

WordPackSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  wordPackList: PropTypes.array.isRequired
};

export default WordPackSelector;
