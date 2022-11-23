export type Services = {
  id: string;
  review: string;
  title: string;
  category: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface ServicesSLiceState {
  items: Services[];
  status: Status;
}
