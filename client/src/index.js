import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCart from './shoping-cart';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyAxiosConfig } from './config/axiosConfig';
import { store, persistor } from './config/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { config } from 'dotenv';

config('./.env');
applyAxiosConfig();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ShoppingCart />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
