import * as React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchPrompt } from '../../feature/promptSlice';

const PromptBox = () => {
  const dispatch = useDispatch();
  const gameMode = useSelector((state) => state.gameMode.value);
  const noun = useSelector((state) => state.prompt.value.noun);
  const noun2 = useSelector((state) => state.prompt.value.noun2);
  const emotion = useSelector((state) => state.prompt.value.emotion);
  const adjective = useSelector((state) => state.prompt.value.adjective);
  const verb = useSelector((state) => state.prompt.value.verb);
  const style = useSelector((state) => state.prompt.value.style);
  // const handpickedPrompt = useSelector((state) => state.prompt.value.handpicked);
  const word = useSelector((state) => state.prompt.value.word);

  useEffect(async () => {
    dispatch(fetchPrompt());
  }, [dispatch]);

  const renderSwitch = (param) => {
    switch (param) {
      case 'Adjective Noun Verb':
        return (
          <>
            <Typography component="div" variant="h4">
              {!adjective ? '' : adjective}
            </Typography>
            <Typography component="div" variant="h4">
              {!noun ? '' : noun}
            </Typography>
            <Typography component="div" variant="h4">
              {!verb ? '' : verb}
            </Typography>
          </>
        );
      case 'Two Characters Story':
        return (
          <>
            <Typography component="div" variant="h4">
              {!noun ? '' : noun}
            </Typography>
            <Typography component="div" variant="h6">
              and
            </Typography>
            <Typography component="div" variant="h4">
              {!noun2 ? '' : noun2}
            </Typography>
            <Typography component="div" variant="h4">
              {!verb ? '' : verb}
            </Typography>
          </>
        );
      case 'Emotional Character':
        return (
          <>
            <Typography component="div" variant="h4">
              {!emotion ? '' : emotion}
            </Typography>
            <Typography component="div" variant="h4">
              {!noun ? '' : noun}
            </Typography>
          </>
        );
      case 'In Style':
        return (
          <>
            <Typography component="div" variant="h4">
              {!adjective ? '' : adjective}
            </Typography>
            <Typography component="div" variant="h4">
              {!noun ? '' : noun}
            </Typography>
            <Typography component="div" variant="h6">
              in style of
            </Typography>
            <Typography component="div" variant="h4">
              {!style ? '' : style}
            </Typography>
          </>
        );
      case 'Single Word':
        return (
          <>
            <Typography component="div" variant="h4">
              {!word ? '' : word}
            </Typography>
          </>
        );
      default:
        return (
          <>
            <Typography component="div" variant="h4">
              {!adjective ? '' : adjective}
            </Typography>
            <Typography component="div" variant="h4">
              {!noun ? '' : noun}
            </Typography>
            <Typography component="div" variant="h4">
              {!verb ? '' : verb}
            </Typography>
          </>
        );
    }
  };

  return (
    <>
      <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
        {renderSwitch(gameMode)}
        <Button variant="contained" onClick={() => dispatch(fetchPrompt())}>
          Get prompt
        </Button>
      </Stack>
    </>
  );
};

export default PromptBox;
