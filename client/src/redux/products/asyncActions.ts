import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosClassic as axios } from 'api/instance';

import { ProductItem, SearchProductsParams } from 'redux/products/interfaces';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async (params: SearchProductsParams) => {
    const { sortBy, searchValue, currentPage } = params;
    const { data } = await axios.get<{ products: ProductItem[]; total: number }>(
      `/products?page=${currentPage}&limit=8&sort=${sortBy}&search=${searchValue}`
    );

    return data;
  }
);
