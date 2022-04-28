import * as React from 'react';
import { Typography } from '@mui/material';

import PromptHistoryList from '../components/PromptHistoryList/PromptHistoryList';

const HistoryBox = () => {
  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        History
      </Typography>
      <PromptHistoryList />
    </>
  );
};

export default HistoryBox;
