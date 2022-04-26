import React from 'react';
import { Grid, TextField, Paper, Button, Container, Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

const Signup = () => {
  return (
    <Box>
      <Container maxWidth="sm">
        <Item>
          <Grid container spacing={4} direction={'column'} justify={'center'} alignItems={'center'}>
            <Grid item xs={12}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Sign up
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Username"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained"> Sign up </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="p" component="div">
              <Link href="/signin" align="center" underline="always">
                Already have an account?
              </Link>
            </Typography>
          </Grid>
        </Item>
      </Container>
    </Box>
  );
};

export default Signup;