import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../src/containers/Header';
import Login from '../src/pages/Login/Login'
import Main from '../src/pages/Main/Main'



function App() {
  return (
    <>
      <Router>
      <Header />
              <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/login" element={<Login/>}  />
              </Routes>
      </Router>
    </>
  );
}

export default App;
