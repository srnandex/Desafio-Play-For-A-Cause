import axios from 'axios';
import { getToken } from './handleStorage';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const setToken = () => {
  const token = getToken();
  api.defaults.headers.common.Authorization = token;
};

export const requestLogin = async (rota, body) => {
  const { data } = await api.post(rota, body);
  return data;
};

export const requestRegister = async (rota, body) => {
  const { data } = await api.post(rota, body);
  console.log(data);
  return data;
};

export const requestData = async (rota) => {
  const { data } = await api.get(rota);
  return data;
};

// export const requestDetails = async (rota, id) => {
//   const url = `${rota}/${id}`;
//   const { data } = await api.get(url);
//   return data;
// };

// export const requestUpdate = async (rota, id, body) => {
//   const url = `${rota}/${id}`;
//   const { data } = await api.patch(url, body);
//   return data;
// };

export default api;
