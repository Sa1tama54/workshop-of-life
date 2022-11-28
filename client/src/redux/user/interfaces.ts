export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface LoginUserTypes {
  login: string;
  password: string;
}

export interface ResponseAuthUser {
  id: number;
  login: string;
  token: string;
}

export interface UserSliceState {
  user: ResponseAuthUser | null;
  token: string | null;
  message: string;
  status: Status;
}
