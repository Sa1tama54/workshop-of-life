import { body } from 'express-validator';

export const photoCreateValidation = [
  body('image', 'Неверная ссылка на изображение').isString(),
  body('description', 'Введите описание фотографии').isLength({ min: 3 }).isString(),
];
