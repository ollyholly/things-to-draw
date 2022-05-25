import { Typography, Container, Box } from '@mui/material';

const Header = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 200
        }}
      >
        <Typography variant="h1">Draw This Thing</Typography>
      </Box>
    </Container>
  );
};

export default Header;
