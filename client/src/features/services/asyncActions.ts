import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SearchServiceParams, Services } from './types';

export const fetchServices = createAsyncThunk<Services[], SearchServiceParams>(
  'service/fetchServiceStatus',
  async (params) => {
    const { category, search, currentPage } = params;
    const { data } = await axios.get<Services[]>('/services', {
      params: {
        page: currentPage,
        limit: 4,
        category,
        search,
      },
    });
    return data;
  }
);
