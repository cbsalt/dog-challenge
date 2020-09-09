import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import store from './store';
import Home from './pages/index';

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
        <GlobalStyles />
      </Provider>
    </>
  );
}

export default App;
