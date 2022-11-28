import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosClassic as axios } from 'api/instance';

import { LoginUserTypes, ResponseAuthUser } from 'redux/user/interfaces';
import { setMessage, clearMessage } from 'redux/user/slice';

export const login = createAsyncThunk<ResponseAuthUser, LoginUserTypes>(
  'user/login',
  async (loginData, thunkAPI) => {
    try {
      const { data } = await axios.post<ResponseAuthUser>('/admin/login', loginData);

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
