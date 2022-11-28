import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import userReducer from 'redux/user/slice';
import filterReducer from 'redux/filter/slice';
import servicesReducer from 'redux/services/slice';
import categoriesReducer from 'redux/categories/slice';
import productsReducer from 'redux/products/slice';

const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      filter: filterReducer,
      services: servicesReducer,
      categories: categoriesReducer,
      products: productsReducer,
    },
  });
};

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const wrapper = createWrapper<RootStore>(makeStore, { debug: true });
