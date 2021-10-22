import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiService, Endpoints } from 'config/api';
import { USER_LOGIN_LOCAL_STORAGE_KEY } from 'config/appConst';
import { mySecureLocal } from 'utility/utilityMethods';

const namespace = 'auth';
const initialState = {
  user: null,
  isLogin: false,
  loading: false,
  error: null
};

export const loginUser = createAsyncThunk(
  `${namespace}/loginUser`,
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

export const authSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLogin = false;
    }
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [loginUser.rejected]: (state, { error }) => {
      state.loading = false;
      state.error = error;
    }
  }
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
