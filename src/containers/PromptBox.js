import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { connect } from 'react-redux';
import { fetchPrompt } from '../actions/actions';

const PromptBox = (props) => {
  // const useFetching = someFetchActionCreator => {
  //   useEffect( () => {
  //     someFetchActionCreator();
  //         console.log('HERE', props);

  //   }, [])
  // }

  // useFetching(props.fetchPrompt);

  const selectNoun = (state) => state.prompt.noun;
  const selectAdjective = (state) => state.prompt.adjective;
  const selectVerb = (state) => state.prompt.verb;

  const noun = useSelector(selectNoun);
  const adjective = useSelector(selectAdjective);
  const verb = useSelector(selectVerb);

  useEffect(async () => {
    dispatch(fetchPrompt());
  }, []);

  const { dispatch } = props;

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '23ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="adjective" variant="standard" value={!adjective ? '' : adjective} />
      <TextField id="noun" variant="standard" value={!noun ? '' : noun} />
      <TextField id="verb" variant="standard" value={!verb ? '' : verb} />
      <Button variant="contained" onClick={() => dispatch(fetchPrompt())}>
        Get prompt
      </Button>
    </Box>
  );
};

PromptBox.propTypes = {
  gameMode: PropTypes.string.isRequired,
  prompt: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
  gameMode: state.gameMode,
  prompt: state.prompt
});

export default connect(mapStateToProps)(PromptBox);
