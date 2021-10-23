import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../config/redux/features/login/authThunkApi';

function useLoginContainer() {
  const userAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loginDetails, setLoginDetails] = useState({
    userName: '',
    password: ''
  });

  useEffect(() => {
    console.log(userAuth);
    if (userAuth.isLogin) window.location.replace('/');
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
    if (authType === 'self') {
      dispatch(
        loginUser({
          userName: loginDetails.userName,
          password: loginDetails.password
        })
      );
    } else if (authType === 'google') {
      //handle google auth
    }
  };

  return {
    onChange,
    handleLoginApi,
    loading: userAuth.loading
  };
}

export default useLoginContainer;
