import * as React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button, Typography, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchPrompt } from '../../feature/promptSlice';

const PromptBox = () => {
  const dispatch = useDispatch();
  const prompt = useSelector((state) => state.prompt.value.prompt);

  useEffect(async () => {
    dispatch(fetchPrompt());
  }, [dispatch]);

  return (
    <>
      <Stack direction="row" spacing={5} justifyContent="center" alignItems="center">
      <Typography component="div" variant="h4">
               {!prompt ? '' : prompt}
             </Typography>
        <Button variant="contained" onClick={() => dispatch(fetchPrompt())}>
          Get prompt
        </Button>
      </Stack>
    </>
  );
};

export default PromptBox;
