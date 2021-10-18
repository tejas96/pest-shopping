import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loginApi } from '../config/api';
import { mySecureLocal } from '../common/utilityMethods';
import { USER_LOGIN_LOCAL_STORAGE_KEY } from '../config/appConst';
import { login as loginAction } from '../config/redux/features/login/authSlice';
import { useDispatch } from 'react-redux';

const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const [loginCreds, setLoginCreds] = useState({
    userName: '',
    password: ''
  });
  const handleLoginForm = (event) => {
    const property = event?.target?.name;
    const value = event?.target?.value;
    setLoginCreds((prevState) => ({ ...prevState, [property]: value }));
  };
  const login = (event) => {
    event.preventDefault();
    loginApi
      .loginUser({
        userName: loginCreds.userName,
        password: loginCreds.password
      })
      .then((result) => {
        if (result.status === 403) {
          alert(result.statusText);
        }
        if (result.status === 200) {
          mySecureLocal('set', USER_LOGIN_LOCAL_STORAGE_KEY, result.data);
          dispatch(loginAction(result.data.user));
          props?.history?.push('/');
        }
      })
      .catch((err) => {
        alert('Authentication failed, check logins cred');
      });
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
      }}>
      <form>
        <div>
          <input
            type="text"
            name="userName"
            placeholder="Enter User Name"
            value={loginCreds.userName}
            onChange={handleLoginForm}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginCreds.password}
            onChange={handleLoginForm}
          />
        </div>
        <div>
          <button onClick={login}>Login</button>
        </div>
      </form>
    </div>
  );
};

LoginComponent.propTypes = {};

export default LoginComponent;
