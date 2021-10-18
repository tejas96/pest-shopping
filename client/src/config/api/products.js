import axios from 'axios';

export const getAllProducts = async () => {
  return axios.get('/api/products');
};

export const getProductById = (id) => {
  return axios.get(`/api/products/${id}`);
};
