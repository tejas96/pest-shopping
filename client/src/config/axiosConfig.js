import axios from 'axios';
import { mySecureLocal } from '../common/utilityMethods';
import { USER_LOGIN_LOCAL_STORAGE_KEY } from './appConst';

export const applyAxiosConfig = () => {
  const userInfoStr = mySecureLocal('get', USER_LOGIN_LOCAL_STORAGE_KEY);
  const userInfoObj = JSON.parse(userInfoStr);
  const jwtToken = userInfoObj?.token;

  // if (!jwtToken) {
  //   window.location.replace('/login');
  //   return;
  // }
  axios.defaults.baseURL = process.env.React_App_BASE_URL;
  //request interceptor
  axios.interceptors.request.use(
    (config) => {
      config.headers = {
        Authorization: `Bearer ${jwtToken}`,
        Accept: 'application/json'
      };
      return config;
    },
    (err) => {}
  );
};
