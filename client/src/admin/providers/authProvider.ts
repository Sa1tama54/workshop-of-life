import axios from 'axios';
import { AuthProvider } from 'react-admin';
import { LoginShemaTypes, ResponseAdminTypes } from 'common/utils/types';

export const authProvider: AuthProvider = {
  login: async (params: LoginShemaTypes) => {
    const { data } = await axios.post<LoginShemaTypes, { data: ResponseAdminTypes }>(
      '/api/admins/login',
      params
    );

    localStorage.setItem('adminToken', data.token);

    return data;
  },
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('adminToken');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('adminToken') ? Promise.resolve() : Promise.reject();
  },
  logout: () => {
    localStorage.removeItem('adminToken');
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve(/* ... */),
};
