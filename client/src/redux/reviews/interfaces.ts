export interface IReview {
  _id: string;
  fullName: string;
  rating: number;
  images?: string[];
  text: string;
  createdAt: string;
}

export interface ReviewSliceState {
  reviews: IReview[];
  loading: boolean;
  error: null | string;
}
