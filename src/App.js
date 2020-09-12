import React from 'react';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/global';

import Home from './pages/index';

function App() {
  return (
    <>
      <Home />
      <GlobalStyles />
      <ToastContainer autoClose={4000} />
    </>
  );
}

export default App;
