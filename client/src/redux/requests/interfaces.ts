export interface IRequest {
  _id: string;
  fullName: string;
  tel: number;
  service: string;
}

export interface RequestSliceState {
  requests: IRequest[];
  loading: boolean;
  error: null | string;
}
