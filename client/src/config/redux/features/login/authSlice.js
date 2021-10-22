import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './authThunkApi';
const namespace = 'auth';
const initialState = {
  user: null,
  isLogin: false,
  loading: false,
  error: null
};

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
