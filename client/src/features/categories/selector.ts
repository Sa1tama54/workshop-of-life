import { RootState } from 'app/store';

export const selectorCategories = (state: RootState) => state.category.items;
