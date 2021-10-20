import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ApiService, Endpoints } from '../../../config/api';
import { USER_LOGIN_LOCAL_STORAGE_KEY } from '../../../config/appConst';
import { login as loginAction } from '../../../config/redux/features/login/authSlice';
import { mySecureLocal } from '../../../utility/utilityMethods';

function useLoginContainer() {
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    userName: '',
    password: ''
  });
  const onChange = (event) => {
    const key = event?.target?.name;
    const value = event?.target?.value;
    setLoginDetails((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleLoginApi = ({ props, event = {}, authType, ...rest }) => {
    event?.preventDefault();
    console.log(loginDetails);
    if (authType === 'self') {
      ApiService.post(Endpoints.loginUser, {
        userName: loginDetails.userName,
        password: loginDetails.password
      })
        .then((result) => {
          mySecureLocal('set', USER_LOGIN_LOCAL_STORAGE_KEY, result.data);
          dispatch(loginAction(result.data.user));
          props?.history?.push('/');
        })
        .catch((err) => {
          alert('Authentication failed, check logins cred');
        });
    } else if (authType === 'google') {
      //handle google auth
    }
  };

  return {
    onChange,
    loginDetails,
    handleLoginApi
  };
}

export default useLoginContainer;
