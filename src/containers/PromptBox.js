import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {  Button, Typography, Stack } from '@mui/material';
import { connect } from 'react-redux';
import { fetchPrompt } from '../actions/actions';

const PromptBox = (props) => {

  const selectNoun = (state) => state.prompt.prompt.noun;
  const selectNounTwo = (state) => state.prompt.prompt.noun2;
  const selectEmotion = (state) => state.prompt.prompt.emotion;
  const selectAdjective = (state) => state.prompt.prompt.adjective;
  const selectVerb = (state) => state.prompt.prompt.verb;
  const selectEnvironment = (state) => state.prompt.prompt.environment;
  const selectStyle = (state) => state.prompt.prompt.style;

  const noun = useSelector(selectNoun);
  const noun2 = useSelector(selectNounTwo);
  const emotion = useSelector(selectEmotion);
  const environment = useSelector(selectEnvironment);
  const adjective = useSelector(selectAdjective);
  const verb = useSelector(selectVerb);
  const style = useSelector(selectStyle);

  useEffect(async () => {
    dispatch(fetchPrompt());
  }, []);

  const { dispatch, gameMode } = props;

  const renderSwitch = (param) => {
    switch(param) {
      case 'Adjective + Noun + Verb':
        return <>
          <Typography component="div" variant="h4">{!adjective ? '' : adjective}</Typography>
      <Typography component="div" variant="h4">{!noun ? '' : noun}</Typography>
      <Typography component="div" variant="h4">{!verb ? '' : verb}</Typography>
        </>
      case 'Noun + Noun + Verb':
        return <>
      <Typography component="div" variant="h4">{!noun ? '' : noun}</Typography>
      <Typography component="div" variant="h6">and</Typography>
      <Typography component="div" variant="h4">{!noun2 ? '' : noun2}</Typography>
      <Typography component="div" variant="h4">{!verb ? '' : verb}</Typography>
        </>
      case 'Emotion + Character':
        return <>
      <Typography component="div" variant="h4">{!emotion ? '' : emotion}</Typography>
      <Typography component="div" variant="h4">{!noun ? '' : noun}</Typography>
        </>
      case 'Character + Environment':
        return <>
      <Typography component="div" variant="h4">{!noun ? '' : noun}</Typography>
      <Typography component="div" variant="h4">{!environment ? '' : environment}</Typography>
        </>
      case 'Adjective + Nount + Style':
        return <>
      <Typography component="div" variant="h4">{!adjective ? '' : adjective}</Typography>
      <Typography component="div" variant="h4">{!noun ? '' : noun}</Typography>
      <Typography component="div" variant="h6">in style of</Typography>
      <Typography component="div" variant="h4">{!style ? '' : style}</Typography>
        </>
      default:
        return <>
          <Typography component="div" variant="h4">{!adjective ? '' : adjective}</Typography>
      <Typography component="div" variant="h4">{!noun ? '' : noun}</Typography>
      <Typography component="div" variant="h4">{!verb ? '' : verb}</Typography>
        </>
    }
  }


  return (
    <>
      <Stack direction="row" spacing={5} justifyContent="center" alignItems="center" >
      {renderSwitch(gameMode)}
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
