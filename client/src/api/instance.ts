import axios from 'axios';

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const axiosClassic = axios.create({
  baseURL: '/api',
  headers: getContentType(),
});

const instance = axios.create({
  baseURL: '/api',
  headers: getContentType(),
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('workshop_token');

  if (config.headers && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
