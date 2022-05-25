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
      <Stack
        direction="column"
        spacing={5}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 10, mb: 10 }}
      >
        <Typography
          component="div"
          variant="h3"
          color="primary.main"
          sx={{
            mb: 2
          }}
        >
          {!prompt ? '' : prompt}
        </Typography>
        <Button variant="contained" onClick={() => dispatch(fetchPrompt())}>
          new prompt
        </Button>
      </Stack>
    </>
  );
};

export default PromptBox;
