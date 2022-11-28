import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchServices } from 'redux/services/asyncActions';
import { ServicesItem, ServicesSLiceState, Status } from 'redux/services/types';

const initialState: ServicesSLiceState = {
  items: [],
  status: Status.LOADING,
};

const servicesSlice = createSlice({
  name: 'serives',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ServicesItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      (state.status = Status.LOADING), (state.items = []);
    });
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchServices.rejected, (state) => {
      (state.status = Status.ERROR), (state.items = []);
    });
  },
});

export const { setItems } = servicesSlice.actions;
export default servicesSlice.reducer;
