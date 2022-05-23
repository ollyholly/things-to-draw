import { Container, Box, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PromptBox from '../../containers/PromptBox';
import SettingsBox from '../../containers/SettingsBox';
// import styledC from 'styled-components';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
  
}));
const FirstItem = styled(Item)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6)
}));

function Main() {
  return (
    <>
      <div id="blue"></div>
      <div id="red"></div>
      <div id="green"></div>
      <Container maxWidth="md">
        <Box>
          <Stack spacing={4}>
            <FirstItem>
              <PromptBox />
            </FirstItem>
            {/* <Wrapper> */}
            <Item >
              <SettingsBox />
            </Item>
            {/* </Wrapper> */}
          </Stack>
        </Box>
      </Container>
    </>
  );
}

// const Wrapper = styledC.div`
//   position: relative;
//   display: grid;
//   grid-template-columns: 240px auto;
//   gap: 20px;
//   max-width: 600px;
//   width: 100%;
//   height: 400px;
//   padding: 20px;
//   background: rgba(15, 14, 71, 0.3);
//   box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
//     inset 0 0 0 0.5px rgba(255, 255, 255, 0.2);
//   border-radius: 20px;
//   backdrop-filter: blur(40px);
//   margin: 0 auto;
// `;

export default Main;
