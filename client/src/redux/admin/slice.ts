import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status, AdminSliceState, ResponseAuthAdmin } from 'redux/admin/interfaces';
import { login } from 'redux/admin/asyncActions';

const token = typeof window !== 'undefined' ? localStorage.getItem('workshop_token') : null;

const initialState: AdminSliceState = {
  adminData: null,
  token,
  message: '',
  status: Status.LOADING,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state) => {
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<ResponseAuthAdmin>) => {
        state.adminData = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(login.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { setMessage, clearMessage } = adminSlice.actions;

export default adminSlice.reducer;
