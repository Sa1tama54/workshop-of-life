import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import services from 'features/services/slice';
const makeStore = () => {
  return configureStore({
    reducer: {
      // user: userReducer,
      service: services,
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
