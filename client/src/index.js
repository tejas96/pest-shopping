import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyAxiosConfig } from './config/axiosConfig';
import { store, persistor } from './config/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { config } from 'dotenv';
import { theme } from './config/styledThemeProvider';
import { ThemeProvider } from 'styled-components';

config('./.env');
applyAxiosConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ThemeProvider theme={theme}>
            <ShoppingCart />
          </ThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
