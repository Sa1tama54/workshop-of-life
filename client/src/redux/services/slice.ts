import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ServicesItem, ServicesSLiceState, Status } from 'redux/services/types';
import { fetchServices } from './asyncActions';

const initialState: ServicesSLiceState = {
  allServices: [],
  total: 8,
  status: Status.LOADING,
};

const servicesSlice = createSlice({
  name: 'serives',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ServicesItem[]>) {
      state.allServices = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.status = Status.LOADING;
        state.allServices = [];
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.allServices = action.payload.services;
      })
      .addCase(fetchServices.rejected, (state) => {
        state.status = Status.ERROR;
        state.allServices = [];
      });
  },
});

export const { setItems } = servicesSlice.actions;
export default servicesSlice.reducer;
