import * as React from 'react';
import { useState } from 'react';
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
  const [promptExists, setPromptExists] = useState(true);

  const handleFaveChange = () => {
    setFavorite(!favorite);
  };

  const handleRemovePrompt = () => {
    setPromptExists(false);
  };

  return (
    <>
      {promptExists ? (
        <ListItem
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="star"
                onClick={handleFaveChange}
                sx={{ color: favorite ? pink[500] : 'disabled' }}
              >
                <StarRateIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={handleRemovePrompt}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.text} />
          <ListItemText secondary={props.gameMode} />
        </ListItem>
      ) : null}
    </>
  );
};

PromptHistoryItem.propTypes = {
  text: PropTypes.string,
  gameMode: PropTypes.string,
  favorite: PropTypes.bool,
  removePrompt: PropTypes.bool
};

// PromptList.defaultProps = {
//   prompts: ['medium'],
// };

export default PromptHistoryItem;
