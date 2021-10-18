import axios from 'axios';

export const getUserCartItems = (id) => {
  return axios.get(`/api/cart/${id}`);
};
