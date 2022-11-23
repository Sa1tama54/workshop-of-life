import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchCategories } from 'redux/categories/asyncActions';
import { Categories, CategoriesSLiceState, Status } from 'redux/categories/types';

const initialState: CategoriesSLiceState = {
  items: [],
  status: Status.LOADING,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Categories[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      (state.status = Status.LOADING), (state.items = []);
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      (state.status = Status.ERROR), (state.items = []);
    });
  },
});

export const { setItems } = categoriesSlice.actions;
export default categoriesSlice.reducer;
