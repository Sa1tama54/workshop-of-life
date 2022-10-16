import { body } from 'express-validator';

export const authValidation = [
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];
