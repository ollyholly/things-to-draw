import * as React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
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
  );
};

export default Header;
