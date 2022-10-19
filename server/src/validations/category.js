import { body } from 'express-validator';

const categoryCreateValidation = [
  body('title', 'Введите название категории').isLength({ min: 3 }).isString(),
  body('preview', 'Неверная ссылка на изображение').isString(),
];

export default categoryCreateValidation;
