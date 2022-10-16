import { body } from 'express-validator';

const authValidation = [
  body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];

export default authValidation;
