import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginAdminTypes, ResponseAuthAdmin } from 'redux/admin/interfaces';
import { setMessage, clearMessage } from 'redux/admin/slice';

export const login = createAsyncThunk<ResponseAuthAdmin, LoginAdminTypes>(
  'admin/login',
  async (loginData, thunkAPI) => {
    try {
      const { data } = await axios.post<ResponseAuthAdmin>('/api/admin/login', loginData);

      localStorage.setItem('workshop_token', data.token);

      thunkAPI.dispatch(clearMessage());

      return data;
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue('');
    }
  }
);
