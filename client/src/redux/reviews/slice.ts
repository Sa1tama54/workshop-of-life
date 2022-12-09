import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews, createReview } from './asyncActions';
import { ReviewSliceState } from './interfaces';

const initialState: ReviewSliceState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        console.log(action);
        // state.error = action.error;
      });
    builder.addCase(createReview.fulfilled, (state, action) => {
      state.reviews.push(action.payload);
    });
    // .addCase(createReview.pending, (state) => {
    //   state
    // })
    // .addCase(createReview.rejected, (state) => {
    //   state.
    // });
  },
});

export default reviewSlice.reducer;
