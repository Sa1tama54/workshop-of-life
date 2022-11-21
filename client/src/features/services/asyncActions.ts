import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Services } from './types';

export const fetchServices = createAsyncThunk<Services[]>(
  'services/getServices',
  async (_: void, thunkAPI) => {
    try {
      const res = await axios.get('http://127.0.0.1:3001/services/', {
        params: {
          limit: 999,
        },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
