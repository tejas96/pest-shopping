import axios from 'axios';

export const get = async (url, payload = {}) => {
  url = decodeUrl(url, payload);
  return axios.get(url, { params: payload });
};
export const post = async (url, payload = {}) => {
  url = decodeUrl(url, payload);
  return axios.post(url, payload);
};
export const put = async (url, payload = {}) => {
  url = decodeUrl(url, payload);
  return axios.put(url, payload);
};
export const deleteApi = async (url, payload = {}) => {
  url = decodeUrl(url, payload);
  return axios.delete(url, payload);
};

function decodeUrl(url, values) {
  Object.keys(values).map((key) => {
    url = url.replace(`:${key}`, values[key]);
  });
  return url;
}
