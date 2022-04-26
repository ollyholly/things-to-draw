import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from '../src/containers/Header';
import SignIn from '../src/pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Main from '../src/pages/Main/Main'



function App() {
  return (
    <>
      <Router>
      <Header />
              <Routes>
                <Route exact path="/" element={<Main/>} />
                <Route exact path="/signin" element={<SignIn/>}  />
                <Route exact path="/signup" element={<SignUp/>}  />
              </Routes>
      </Router>
    </>
  );
}

export default App;
