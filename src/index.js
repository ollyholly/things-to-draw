import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import thunkMiddleware from 'redux-thunk';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers/reducers';
// import { createLogger } from 'redux-logger';
import store from './app/store';

// const logger = createLogger();

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
