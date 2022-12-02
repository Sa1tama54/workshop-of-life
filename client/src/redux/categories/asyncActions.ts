import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClassic as axios } from 'api/instance';
import { Categories } from 'redux/categories/types';

export const fetchCategories = createAsyncThunk<Categories[]>(
  'categories/getCategories',
  async (_: void, thunkAPI) => {
    try {
      const { data } = await axios.get('http://127.0.0.1:3001/categories/');
      return data.categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
