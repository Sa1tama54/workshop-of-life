export enum SortPropertyEnum {
  PRICE_DESC = 'price,DESC',
  PRICE_ASC = 'price,ASC',
}

export type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum | string;
};

export interface FilterSliceState {
  searchValue: string;
  categoryName: string;
  currentPage: number;
  sort: SortItem;
}
