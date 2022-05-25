import {
  Container,
  // Link,
  Grid,
  Typography
} from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="md">
        <Grid containerp={2} sx={{ height: 80 }}>
          <Grid item xs={12}>
            <Typography variant="body1">
              &copy; Olly Holovchenko, {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
