import * as React from 'react';
// import { styled } from '@mui/material/styles';
import {Typography, List, ListItem, IconButton, Avatar, ListItemAvatar, ListItemText, } from '@mui/material';
import {Folder as FolderIcon, Delete as DeleteIcon, StarRate as StarRateIcon} from '@mui/icons-material';


function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

const HistoryBox = () => {
  return (
    <>
  <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
  History
          </Typography>
{/* <Demo> */}
            <List >
              {generate(
                <ListItem
                  secondaryAction={<>
                    <IconButton edge="end" aria-label="star">
                      <StarRateIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
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
                  <ListItemText
                    primary="Single-line item"
                  />
                  <ListItemText
                    secondary="01:15:35"
                  />
                </ListItem>,
              )}
            </List>
            {/* </Demo> */}
  </>
  )
};

export default HistoryBox;
