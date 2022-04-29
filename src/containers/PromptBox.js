import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  Button, Typography, Stack } from '@mui/material';
import { connect } from 'react-redux';
import { fetchPrompt } from '../actions/actions';

const PromptBox = (props) => {

  const selectNoun = (state) => state.prompt.prompt.noun;
  const selectAdjective = (state) => state.prompt.prompt.adjective;
  const selectVerb = (state) => state.prompt.prompt.verb;

  const noun = useSelector(selectNoun);
  const adjective = useSelector(selectAdjective);
  const verb = useSelector(selectVerb);

  useEffect(async () => {
    dispatch(fetchPrompt());
  }, []);

  const { dispatch } = props;

  return (
    <>
      <Stack direction="row" spacing={5} justifyContent="center" alignItems="center" >
      <Typography component="div" variant="h4">{!adjective ? '' : adjective}</Typography>
      <Typography component="div" variant="h4">{!noun ? '' : noun}</Typography>
      <Typography component="div" variant="h4">{!verb ? '' : verb}</Typography>
      <Button variant="contained" onClick={() => dispatch(fetchPrompt())}>
        Get prompt
      </Button>
      </Stack>
</>
  );
};

PromptBox.propTypes = {
  gameMode: PropTypes.string.isRequired,
  prompt: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.string,
  isPending: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  gameMode: state.gameMode,
  prompt: state.prompt.prompt,
  error: state.prompt.error,
  isPending: state.prompt.isPending
});

export default connect(mapStateToProps)(PromptBox);
