export type Services = {
  id: string;
  price: number;
  title: string;
  imageUrl: string;
};

export enum Status {
  LOADING = 'loadung',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchServiceParams = {
  category: string;
  search: string;
  currentPage: string;
};

export interface ServicesSLiceState {
  items: Services[];
  status: Status;
}
