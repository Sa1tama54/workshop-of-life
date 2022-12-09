import { IReview } from './interfaces';
import { axiosClassic as axios } from 'api/instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axioss from 'axios';

export const fetchReviews = createAsyncThunk('reviews/getReviews', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<{
      limit: number;
      reviews: IReview[];
    }>(`/reviews?limit=3`);
    return thunkAPI.fulfillWithValue(data.reviews).payload;
  } catch (error) {
    if (axioss.isAxiosError(error)) {
      console.error('Axios Error: ', error.message);
      return thunkAPI.rejectWithValue(error.message);
    } else {
      console.error('No Axios Error: ', error);
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
});

export const createReview = createAsyncThunk('reviews/createReview', async (review, thunkAPI) => {
  try {
    const { data } = await axios.post('/reviews', review);

    console.log(data, thunkAPI.fulfillWithValue(data));

    return thunkAPI.fulfillWithValue(data).payload;
  } catch (error) {
    if (axioss.isAxiosError(error)) {
      console.error('Axios Error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    } else {
      console.error('No Axios Error:', error);
      return thunkAPI.rejectWithValue('An unexpected error occurred');
    }
  }
});
