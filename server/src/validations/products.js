import { body } from 'express-validator';

const productCreateValidation = [
  body('preview', 'Неверная ссылка на изображение').isString(),
  body('title', 'Введите корректное название продукта').isLength({ min: 3 }).isString(),
  body('description', 'Введите описание продукта').isLength({ min: 3 }).isString(),
  body('price', 'Введите стоимость продукта').isLength({ min: 0 }).isNumeric(),
];

export default productCreateValidation;
