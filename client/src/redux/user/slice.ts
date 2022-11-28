import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status, UserSliceState, ResponseAuthUser } from 'redux/user/interfaces';
import { login } from 'redux/user/asyncActions';

const token = typeof window !== 'undefined' ? localStorage.getItem('workshop_token') : null;

const initialState: UserSliceState = {
  user: null,
  token,
  message: '',
  status: Status.LOADING,
};

export const userSlice = createSlice({
  name: 'user',
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
      .addCase(login.fulfilled, (state, action: PayloadAction<ResponseAuthUser>) => {
        state.user = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(login.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { setMessage, clearMessage } = userSlice.actions;

export default userSlice.reducer;
