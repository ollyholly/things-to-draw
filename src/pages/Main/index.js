import { Container, Box, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PromptBox from '../../containers/PromptBox';
import SettingsBox from '../../containers/SettingsBox';

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
      <Container maxWidth="md">
        <Box>
          <Stack spacing={4}>
            <FirstItem>
              <PromptBox />
            </FirstItem>
            <Item>
              <SettingsBox />
            </Item>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default Main;
