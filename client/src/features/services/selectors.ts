import { RootState } from 'app/store';

export const selectorService = (state: RootState) => state.service.items;
