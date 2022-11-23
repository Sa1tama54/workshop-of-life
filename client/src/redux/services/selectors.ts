import { RootState } from 'redux/store';

export const selectorService = (state: RootState) => state.service.items;
