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

export interface ServicesSLiceState {
  items: ServicesItem[];
  total: number;
  status: Status;
}

export interface SearchServicesParams {
  sortBy: string;
  searchValue: string;
  currentPage: string;
}
