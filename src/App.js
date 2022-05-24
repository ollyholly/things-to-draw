import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../src/containers/Header';
import Main from './pages/Main';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import styled from 'styled-components';
import Background from './components/Background';
// import Wave from './components/Wave';
import BlobAnimation from './components/BlobAnimation';
// import TextSection from "./Components/TextSection";
// import Card from "./Components/Card";

function App() {
  return (
    <>
      <Wrapper>
        <Background />
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
