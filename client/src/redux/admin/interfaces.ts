export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface LoginAdminTypes {
  login: string;
  password: string;
}

export interface ResponseAuthAdmin {
  id: number;
  login: string;
  token: string;
}

export interface AdminSliceState {
  adminData: ResponseAuthAdmin | null;
  token: string | null;
  message: string;
  status: Status;
}
