import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosClassic as axios } from 'api/instance';

import { FilterSliceState } from 'redux/filter/interfaces';
import { ServicesItem } from 'redux/services/types';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (params: FilterSliceState, thunkApi) => {
    try {
      const { categoryName, searchValue, currentPage } = params;
      const { data } = await axios.get<{ services: ServicesItem[]; total: number }>(
        `/services?page=${currentPage}&limit=8&category=${categoryName}&search=${searchValue}`
      );
      return data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
