import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { mySecureLocal } from '../../utility/utilityMethods';
import { loginApi } from '../../config/api';
import { USER_LOGIN_LOCAL_STORAGE_KEY } from '../../config/appConst';
import { login as loginAction } from '../../config/redux/features/login/authSlice';
import GoogleLogin from 'react-google-login';

const LoginComponent = (props) => {
  const dispatch = useDispatch();
  const [loginCreds, setLoginCreds] = useState({
    userName: '',
    password: ''
  });
  const [google, setGoogle] = useState(false);
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
  const openGoogleLogin = (e) => {
    e.preventDefault();
    setGoogle(true);
  };
  const handle = (res) => {
    console.log(res.prifile);
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
          <button onClick={openGoogleLogin}>Google Login</button>
        </div>
      </form>
      <GoogleLogin
        clientId="975111621469-v5lhlinkth3j22ho558r44vlggme0cvd.apps.googleusercontent.com"
        buttonText="google"
        onSuccess={handle}
        onFailure={handle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

LoginComponent.propTypes = {};

export default LoginComponent;
