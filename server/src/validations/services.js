import { body } from 'express-validator';

const servicesCreateValidation = [
  body('title', 'Введите название услуги').isLength({ min: 3 }).isString(),
  body('preview', 'Неверная ссылка на изображение').isString(),
];

export default servicesCreateValidation;