import { combineReducers } from 'redux';
import authReducer from './login/authSlice';
export default combineReducers({
  auth: authReducer
});
