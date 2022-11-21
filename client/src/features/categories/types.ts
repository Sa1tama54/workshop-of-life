export type Categories = {
  id: string;
  title: string;
  preview: string;
  description: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface CategoriesSLiceState {
  items: Categories[];
  status: Status;
}
