import { USER_LOGIN_LOCAL_STORAGE_KEY } from '../config/appConst';

export const errorTost = (errorMessage) => {};

export const mySecureLocal = (operation, key, payload) => {
  if (operation === 'set') {
    localStorage.setItem(key, JSON.stringify(payload));
  } else if (operation === 'get') return localStorage.getItem(key);
  else if (operation === 'remove') localStorage.removeItem(key);
};

export const logout = () => {
  mySecureLocal('remove', USER_LOGIN_LOCAL_STORAGE_KEY);
  const localData = mySecureLocal('get', USER_LOGIN_LOCAL_STORAGE_KEY);
  if (!localData) return true;
  return false;
};
