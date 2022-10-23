import { body } from 'express-validator';

export const authValidation = [
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export const categoryValidation = [
  body('title', 'Введите название категории').isLength({ min: 3 }).isString(),
  body('preview', 'Неверная ссылка на изображение').isString(),
];

export const productValidation = [
  body('preview', 'Неверная ссылка на изображение').isString(),
  body('title', 'Введите корректное название продукта').isLength({ min: 3 }).isString(),
  body('description', 'Введите описание продукта').isLength({ min: 3 }).isString(),
  body('price', 'Введите стоимость продукта').isLength({ min: 0 }).isNumeric(),
];

export const serviceValidation = [
  body('title', 'Введите название услуги').isLength({ min: 3 }).isString(),
  body('preview', 'Неверная ссылка на изображение').isString(),
];

export const vacancyValidation = [
  body('image', 'Неверная ссылка на изображение').isString(),
  body('title', 'Введите корректный заголовок вакансии').isLength({ min: 3 }).isString(),
  body('price', 'Введите заработную плату').isLength({ min: 0 }).isNumeric(),
  body('graphic', 'Введите график работы').isLength({ min: 3 }).isString(),
  body('experience', 'Введите опыт работы').isLength({ min: 3 }).isString(),
  body('tel', 'Введите номер телефона').isLength({ min: 0 }).isNumeric(),
];

export const photoValidation = [
  body('image', 'Неверная ссылка на изображение').isString(),
  body('description', 'Введите описание фотографии').isLength({ min: 3 }).isString(),
];

export const reviewValidation = [
  body('fullName', 'Введите имя и фамилию').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст').isLength({ min: 3 }).isString(),
];
