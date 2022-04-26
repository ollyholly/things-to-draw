import * as React from 'react';
import PropTypes from 'prop-types';
import { List } from '@mui/material';

import PromptHistoryItem from '../PromptHistoryItem/PromptHistoryItem';

const PromptHistoryList = (props) => {
  return (
    <List>
      {!props.prompts
        ? 'No prompts yet!'
        : props.prompts.map((prompt, i) => {
          console.log(prompt)
return <PromptHistoryItem key={i} text={prompt.text} gameMode={prompt.gameMode} removePrompt={false} favorite={prompt.favorite} />
        })
            
          }
    </List>
  );
};

PromptHistoryList.propTypes = {
  prompts: PropTypes.array
};

export default PromptHistoryList;
