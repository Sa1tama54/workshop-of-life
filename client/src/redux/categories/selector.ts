import { RootState } from 'redux/store';

export const selectorCategories = (state: RootState) => state.category.items;
