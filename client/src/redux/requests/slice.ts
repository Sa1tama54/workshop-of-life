import { createSlice } from '@reduxjs/toolkit';
import { fetchRequests } from './asyncActions';
import { RequestSliceState } from './interfaces';

const initialState: RequestSliceState = {
  requests: [],
  loading: false,
  error: null,
};

const requestSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchRequests.fulfilled, (state, action) => {
      state.requests = action.payload.request;
      state.loading = false;
    });
    builder.addCase(fetchRequests.pending, (state, action) => {
      state.requests = [];
      state.loading = true;
    });
    builder.addCase(fetchRequests.rejected, (state, action) => {
      state.requests = [];
      state.loading = false;
      // state.error = action.error;
    });
  },
});

export default requestSlice.reducer;
