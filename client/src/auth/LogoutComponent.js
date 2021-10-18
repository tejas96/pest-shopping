import React from 'react';
import PropTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { logout as logoutAction } from '../config/redux/features/login/authSlice';
import { useDispatch } from 'react-redux';
import { logout } from '../common/utilityMethods';

const LogoutComponent = ({ onLogout = () => {} }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    dispatch(logoutAction());
    onLogout();
  };
  return <FeatherIcon icon="log-out" onClick={handleLogout} />;
};

LogoutComponent.propTypes = {};

export default LogoutComponent;
