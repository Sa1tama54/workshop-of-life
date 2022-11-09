import { body } from 'express-validator';

export const authValidation = [
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export const reviewValidation = [
  body('fullName', 'Введите имя и фамилию').isLength({ min: 3 }).isString(),
  body('text', 'Введите текст').isLength({ min: 3 }).isString(),
];

export const requestValidation = [
  body('fullName', 'Введите имя и фамилию').isLength({ min: 3 }).isString(),
  body('tel', 'Введите номер телефона').isLength({ min: 0 }).isNumeric(),
];
