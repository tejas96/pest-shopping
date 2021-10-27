import { useState } from 'react';
import * as yup from 'yup';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const userSignupFormField = {
  userName: '',
  password: '',
  confirmPassword: ''
};
const useSignupContainer = () => {
  const database = firebase.database();
  const [componentInfo, setComponentInfo] = useState({
    ...userSignupFormField
  });
  const [errors, setErrors] = useState({
    isValid: false,
    ...userSignupFormField
  });
  const onChange = (event) => {
    const [property, value] = [event?.target?.name, event?.target?.value];
    setComponentInfo((prevState) => ({ ...prevState, [property]: value }));
  };

  const handleSignup = async () => {
    let isValid = await __validate();
    if (isValid) {
      try {
        const userCredDetails = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            componentInfo.userName,
            componentInfo.password
          )
          .catch(function (err) {
            if (err.code === 'auth/email-already-in-use') {
              setErrors(() => ({
                userName: 'Email address used by another user',
                isValid: false
              }));
            }
          });
        //do some stuff with user
        if (userCredDetails) {
          database.ref('User/info').set({ ...userCredDetails });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const __validate = async () => {
    let schema = yup.object().shape({
      userName: yup
        .string()
        .email()
        .required('Email is required')
        .typeError('Invalid email'),
      password: yup
        .string()
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
          "Password should contains 'digit, capital letter, small letter'"
        )
        .required('Password is required')
        .typeError('Invalid password'),
      confirmPassword: yup
        .string()
        .test('passwords-match', 'Passwords must match', function (value) {
          return this.parent.password === value;
        })
    });
    return await schema
      .validate(componentInfo, { abortEarly: false })
      .then((res) => {
        setErrors(() => ({ isValid: true }));
        return true;
      })
      .catch((err) => {
        let obj = {};
        err?.inner?.map((error) => {
          obj[error.path] = error.message;
        });
        setErrors(() => ({ ...obj, isValid: false }));
        return false;
      });
  };

  return {
    componentInfo,
    onChange,
    handleSignup,
    errors
  };
};

export default useSignupContainer;
