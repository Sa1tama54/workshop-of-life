import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import adminReducer from 'features/admin/slice';
import services from 'features/services/slice';
import categories from 'features/categories/slice';

const makeStore = () => {
  return configureStore({
    reducer: {
      admin: adminReducer,
      service: services,
      category: categories,
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
