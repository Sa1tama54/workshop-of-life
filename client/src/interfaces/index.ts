export interface IReviews {
  _id: string;
  fullName: string;
  rating?: number;
  images?: string[];
  text: string;
}

export interface IAdmin {
  _id: string;
  login: string;
  passwordHash: string;
}

export interface IVacancy {
  _id: string;
  image?: string;
  title: string;
  price?: number;
  graphic?: string;
  experience?: string;
  tel: number;
}
export interface ICategory {
  _id: string;
  title: string;
  preview: string;
  description: string;
}

export interface IService {
  _id: string;
  title: string;
  preview: string;
  category: ICategory;
}

export interface IPhoto {
  _id: string;
  image: string;
  description: string;
}

export interface IRequest {
  _id: string;
  fullName: string;
  tel: number;
  service: IService;
}

export interface IProduct {
  _id: string;
  preview: string;
  title: string;
  description: string;
  price: number;
}
