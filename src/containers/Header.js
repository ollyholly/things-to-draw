import * as React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
// import {Menu as MenuIcon} from '@mui/icons-material'

const Header = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link color="inherit" variant="h5" underline="none" href="/">
            {'Draw me this'}
          </Link>
        </Typography>
        <Link color="inherit" variant="h6" underline="none" href="/signin">
          {'Sign in'}
        </Link>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export default Header;
