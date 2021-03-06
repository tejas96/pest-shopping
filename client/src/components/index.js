import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from './login/LoginComponent';
import LogoutComponent from './login/LogoutComponent';
import ProtectRoute from './common/protectRoute';
import DashBoard from './dashboard/ProductPage';
import MyCart from './my-cart/MyCart';

const ShoppingCart = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={DashBoard} />
      <ProtectRoute path="/cart" component={MyCart} />
      <ProtectRoute path="/cart/:id" component={MyCart} />
      <Route path="/login" component={LoginComponent} />
      <Route path="/logout" component={LogoutComponent} />
    </Switch>
  );
};

ShoppingCart.propTypes = {};

export default ShoppingCart;
