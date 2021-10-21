import FeatherIcon from 'feather-icons-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout as logoutAction } from '../../config/redux/features/login/authSlice';
import { logout } from '../../utility/utilityMethods';

const LogoutComponent = ({ onLogout = () => {} }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    logout();
    dispatch(logoutAction());
    onLogout();
    setTimeout(() => {
      window.location.replace('/login');
    }, 2000);
  };
  return <FeatherIcon icon="log-out" onClick={handleLogout} />;
};

LogoutComponent.propTypes = {};

export default LogoutComponent;
