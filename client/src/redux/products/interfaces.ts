export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProductItem {
  _id: string;
  preview: string;
  title: string;
  description: string;
  price: number;
}

export interface SearchProductsParams {
  sortBy: string;
  searchValue: string;
  currentPage: string;
}

export interface ProductSliceState {
  allProducts: ProductItem[];
  total: number;
  message: string;
  status: Status;
}
