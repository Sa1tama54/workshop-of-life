import { body } from 'express-validator';

const vacancyCreateValidation = [
  body('image', 'Неверная ссылка на изображение').isString(),
  body('title', 'Введите корректный заголовок вакансии').isLength({ min: 3 }).isString(),
  body('price', 'Введите заработную плату').isLength({ min: 0 }).isNumeric(),
  body('graphic', 'Введите график работы').isLength({ min: 3 }).isString(),
  body('experience', 'Введите опыт работы').isLength({ min: 3 }).isString(),
  body('tel', 'Введите номер телефона').isLength({ min: 0 }).isNumeric(),
];

export default vacancyCreateValidation;
