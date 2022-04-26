import * as React from 'react';
import { Typography, Button, Stack } from '@mui/material';
// import { styled } from '@mui/material/styles';

const TimerBox = () => {
  return (
    <div>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Timer
      </Typography>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h1" component="div">
        00:00:00
      </Typography>
      <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="contained" color="success">
          Start
        </Button>
        <Button variant="contained" color="error">
          Stop
        </Button>
        <Button variant="contained">Save</Button>
      </Stack>
    </div>
  );
};

export default TimerBox;
