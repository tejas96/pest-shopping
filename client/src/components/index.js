import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from './auth/login/LoginComponent.jsx';
import LogoutComponent from './auth/LogoutComponent';
import SignUp from '../components/auth/signup/signupComponent.jsx';
import ProtectRoute from './common/protectRoute';
import DashBoard from './dashboard/ProductPageComponent.jsx';
import MyCart from './my-cart/MyCart';

const ShoppingCart = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <ProtectRoute path="/cart" component={MyCart} />
      <ProtectRoute path="/cart/:id" component={MyCart} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/logout" component={LogoutComponent} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

ShoppingCart.propTypes = {};

export default ShoppingCart;
