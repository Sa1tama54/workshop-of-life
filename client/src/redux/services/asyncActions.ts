import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { ServicesItem } from 'redux/services/types';

export const fetchServices = createAsyncThunk<ServicesItem[]>(
  'services/fetchServices',
  async (_: void, thunkAPI) => {
    try {
      const { data } = await axios.get(`${process.env.API_URL}/services`);
      return data.services;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
