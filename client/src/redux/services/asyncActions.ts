import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClassic as axios } from 'api/instance';
import { ServicesItem } from 'redux/services/types';

export const fetchServices = createAsyncThunk<ServicesItem[]>(
  'services/fetchServices',
  async (_: void, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:3001/services`);
      return data.services;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
