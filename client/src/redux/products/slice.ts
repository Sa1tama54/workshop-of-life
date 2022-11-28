import { createSlice } from '@reduxjs/toolkit';

import { ProductSliceState, Status } from 'redux/products/interfaces';
import { getAllProducts } from 'redux/products/asyncActions';

const initialState: ProductSliceState = {
  allProducts: [],
  total: 0,
  message: '',
  status: Status.LOADING,
};

export const productsSlice = createSlice({
  name: 'products',
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
      .addCase(getAllProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.allProducts = [];
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.allProducts = action.payload.products;
        state.total = action.payload.total;
      })
      .addCase(getAllProducts.rejected, (state) => {
        state.status = Status.ERROR;
        state.allProducts = [];
      });
  },
});

export const { setMessage, clearMessage } = productsSlice.actions;

export default productsSlice.reducer;
