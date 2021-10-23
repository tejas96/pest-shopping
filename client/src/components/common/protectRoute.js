import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { USER_LOGIN_LOCAL_STORAGE_KEY } from '../../config/appConst';
import ProductPage from '../dashboard/ProductPageComponent.jsx';

const ProtectRoute = ({ path = '/', component = ProductPage, ...props }) => {
  const checkTokenAvailable = localStorage.getItem(
    USER_LOGIN_LOCAL_STORAGE_KEY
  );
  if (!checkTokenAvailable) {
    alert('please login');
    return <Redirect to={{ pathname: '/login' }} />;
  }
  return <Route path={path} component={component} {...props} />;
};

ProtectRoute.propTypes = {};

export default ProtectRoute;
