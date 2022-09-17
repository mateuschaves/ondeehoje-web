import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalStyle from './globalStyle';

import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '~/store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
