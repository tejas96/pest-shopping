import axios from 'axios';

export const loginUser = async (payload) => {
  return axios.post('/api/user/login', payload);
};
