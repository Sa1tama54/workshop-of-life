import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Categories } from './types';

export const fetchCategories = createAsyncThunk<Categories[]>(
  'categories/getCategories',
  async (_: void, thunkAPI) => {
    try {
      const res = await axios.get('http://127.0.0.1:3001/categories/');
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
