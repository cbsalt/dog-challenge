import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import Routes from './routes';

import GlobalStyles from './styles/global';

import history from './services/history';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={4000} />
      </Router>
    </>
  );
}

export default App;
