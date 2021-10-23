import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiService, Endpoints } from 'config/api';
import { USER_LOGIN_LOCAL_STORAGE_KEY } from 'config/appConst';
import { mySecureLocal } from 'utility/utilityMethods';
import { login } from './authSlice';

export const loginUser = createAsyncThunk(
  `auth/loginUser`,
  async ({ userName, password }, thunkApi) => {
    return await ApiService.post(Endpoints.loginUser, {
      userName: userName,
      password: password
    }).then((result) => {
      mySecureLocal('set', USER_LOGIN_LOCAL_STORAGE_KEY, result.data);
      thunkApi.dispatch(login(result.data.user));
      return result.data.user;
    });
  }
);
