import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FilterSliceState, SortItem } from 'redux/filter/interfaces';

const initialState: FilterSliceState = {
  searchValue: '',
  categoryName: 'Все',
  currentPage: 1,
  sort: {
    name: 'По умолчанию',
    sortProperty: '',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryName(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
      state.currentPage = 1;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },
    setSort(state, action: PayloadAction<SortItem>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.categoryName = action.payload.categoryName;
        state.sort = action.payload.sort;
      } else {
        state.currentPage = 1;
        state.categoryName = '';
        state.sort = {
          name: '',
          sortProperty: '',
        };
      }
    },
  },
});

export const { setCategoryName, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;
