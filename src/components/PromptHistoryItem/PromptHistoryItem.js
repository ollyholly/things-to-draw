import * as React from 'react';
import PropTypes from 'prop-types';
import { pink } from '@mui/material/colors';
import { ListItem, IconButton, Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import {
  Folder as FolderIcon,
  Delete as DeleteIcon,
  StarRate as StarRateIcon
} from '@mui/icons-material';
import { starPrompt, deletePrompt } from '../../actions/actions';

const PromptHistoryItem = (props) => {
  const { id, text, favorite, gameMode } = props.prompt;
  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="star"
              onClick={() => props.dispatch(starPrompt(id))}
              sx={{ color: favorite ? pink[500] : 'disabled' }}
            >
              <StarRateIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => props.dispatch(deletePrompt(id))}
            >
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
        <ListItemText primary={text} />
        <ListItemText secondary={gameMode} />
      </ListItem>
    </>
  );
};

PromptHistoryItem.propTypes = {
  prompt: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default PromptHistoryItem;
