export type ServicesItem = {
  _id: string;
  preview: string;
  title: string;
  category: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface SearchServicesParams {
  sortBy: string;
  categoryName: string;
  searchValue: string;
  currentPage: string;
}

export interface ServicesSLiceState {
  allServices: ServicesItem[];
  status: Status;
  total: number;
}
