import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosClassic as axios } from 'api/instance';
import { IRequest } from './interfaces';

export const fetchRequests = createAsyncThunk('request/fetchRequests', async (_, thunkAPI) => {
  try {
    const data = await axios.get<{
      limit: number;
      requests: IRequest[];
    }>(`/requests`);
    return data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
