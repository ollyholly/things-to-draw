import * as React from 'react';
// import { useState } from 'react';
import { pink } from '@mui/material/colors';
import PropTypes from 'prop-types';
import { ListItem, IconButton, Avatar, ListItemAvatar, ListItemText } from '@mui/material';
import {
  Folder as FolderIcon,
  Delete as DeleteIcon,
  StarRate as StarRateIcon
} from '@mui/icons-material';
import {starPrompt, deletePrompt } from '../../actions/actions'

const PromptHistoryItem = (props) => {
  // const [favorite, setFavorite] = useState(props.favorite);
  // const [promptExists, setPromptExists] = useState(true);

  // const handleFaveChange = () => {
  //   setFavorite(!favorite);
  // };

  // const handleRemovePrompt = () => {
  //   setPromptExists(false);
  // };
  // console.log(props)
  // eslint-disable-next-line react/prop-types
  const { id, text, favorite, gameMode} = props.prompt
  return (
    <>
     
        <ListItem
          secondaryAction={
            <>
              <IconButton
                edge="end"
                aria-label="star"
                // eslint-disable-next-line react/prop-types
                onClick={()=> props.dispatch(starPrompt(id))}
                sx={{ color: favorite ? pink[500] : 'disabled' }}
              >
                <StarRateIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" 
              
              // eslint-disable-next-line react/prop-types
              onClick={()=> props.dispatch(deletePrompt(id))}>
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
  text: PropTypes.string,
  gameMode: PropTypes.string,
  favorite: PropTypes.bool,
};

// PromptList.defaultProps = {
//   prompts: ['medium'],
// };

export default PromptHistoryItem;
