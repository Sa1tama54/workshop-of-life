import { Router } from 'express';
import categoryValidation from '../validations/category';
import handleValidationError from '../middlewares/handleValidationError';
import categoriesController from '../controllers/categories.controller';
import checkAuth from '../middlewares/checkAuth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The categories managing API
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Добавление новой категории.
 *     tags: [Categories]
 */
router.post('/', categoryValidation, handleValidationError, checkAuth, categoriesController.create);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Удаление категории.
 *     tags: [Categories]
 */
router.delete('/:id', checkAuth, categoriesController.remove);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Получение всех категорий.
 *     tags: [Categories]
 */
router.get('/', categoriesController.getAll);

export default router;
