import { Container, Box, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from '../src/containers/Header';
import PromptBox from './containers/PromptBox';
import Settings from './containers/Settings';
import HistoryBox from './containers/HistoryBox';
import TimeBox from './containers/TimeBox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

function App() {
  return (
    <Container maxWidth="md">
      <Box>
        <Stack spacing={2}>
          <Item>
            <Header />
          </Item>
          <Item>
            <PromptBox />
          </Item>
          <Item>
            <Settings />
          </Item>
          <Item>
            <TimeBox />
          </Item>
          <Item>
            <HistoryBox />
          </Item>
        </Stack>
      </Box>
    </Container>
  );
}

export default App;
