import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../config/redux/features/login/authThunkApi';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
      firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((userCred) => {
          console.log(userCred);
        });
    }
  };

  return {
    onChange,
    handleLoginApi,
    loading: userAuth.loading
  };
}

export default useLoginContainer;
