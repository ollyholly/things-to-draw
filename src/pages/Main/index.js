import { Container, Box, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PromptBox from '../../containers/PromptBox/PromptBox';
import SettingsBox from '../../containers/SettingsBox/SettingsBox';
// import styledC from 'styled-components';


const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  backdropFilter: 'blur(10px) saturate(100%) contrast(45%) brightness(130%)'
}));

function Main() {
  return (
    <>
      <Container maxWidth="md">
        <Box>
          <Stack spacing={4}>
            <Item sx={{
              marginTop: '100px',
              paddingTop: '100px',
              paddingBottom: '100px',
              
            }}>
              <PromptBox />
            </Item>
            <Item >
              <SettingsBox />
            </Item>
          </Stack>
        </Box>
      </Container>
    </>
  );
}



export default Main;
