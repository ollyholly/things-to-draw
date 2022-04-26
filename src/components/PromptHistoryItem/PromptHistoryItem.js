import * as React from 'react';
import { useState,  } from 'react';
import { pink } from '@mui/material/colors';
import PropTypes from 'prop-types';
import { ListItem, IconButton, Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import {
  Folder as FolderIcon,
  Delete as DeleteIcon,
  StarRate as StarRateIcon
} from '@mui/icons-material';

const PromptHistoryItem = (props) => {
  const [favorite, setFavorite] = useState(props.favorite);
  const [removePrompt, setRemovePrompt] = useState(false);

  const handleFaveChange = () => {
    setFavorite(!favorite);
  }

  const handleRemovePrompt= () => {
    console.log('01', removePrompt);
    setRemovePrompt(true);
    console.log('02', removePrompt);
  }

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton edge="end" aria-label="star" onClick={handleFaveChange} sx={{ color: favorite? pink[500] : 'disabled' }}>
              <StarRateIcon />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={handleRemovePrompt}>
              <DeleteIcon />
            </IconButton>
          </>
        }
        removePrompt={removePrompt}
      >
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.text} />
        <ListItemText secondary={props.gameMode} />
      </ListItem>
    </>
  );
};

PromptHistoryItem.propTypes = {
  text: PropTypes.string,
  gameMode: PropTypes.string,
  favorite: PropTypes.bool,
  removePrompt: PropTypes.bool,
};

// PromptList.defaultProps = {
//   prompts: ['medium'],
// };

export default PromptHistoryItem;
