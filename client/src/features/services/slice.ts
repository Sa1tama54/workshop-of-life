import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchServices } from './asyncActions';
import { Services, ServicesSLiceState, Status } from './types';

const initialState: ServicesSLiceState = {
  items: [],
  status: Status.LOADING,
};

const servicesSlice = createSlice({
  name: 'serives',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Services[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state, action) => {
      (state.status = Status.LOADING), (state.items = []);
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {
      (state.status = Status.ERROR), (state.items = []);
    });
  },
});

export const { setItems } = servicesSlice.actions;
export default servicesSlice.reducer;
