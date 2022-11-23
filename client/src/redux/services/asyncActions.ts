import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Services } from 'redux/services/types';

export const fetchServices = createAsyncThunk<Services[]>(
  'services/getServices',
  async (_: void, thunkAPI) => {
    try {
      const res = await axios.get('http://127.0.0.1:3001/services/', {
        params: {
          limit: 999,
        },
      });
      return res.data.services;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
