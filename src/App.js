import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './pages/Main/Main';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import styled from 'styled-components';
import BlobAnimation from './components/BlobAnimation';

function App() {
  return (
    <>
      <Wrapper>
        <WaveWrapper>
          <BlobAnimation />
        </WaveWrapper>
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Router>
          <Footer />
        </ThemeProvider>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const WaveWrapper = styled.div`
  position: relative;
  top: 200px;
`;

export default App;
