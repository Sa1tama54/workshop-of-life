import { Router } from 'express';
import handleValidationError from '../middlewares/handleValidationError';
import categoriesController from '../controllers/categories.controller';
import checkAuth from '../middlewares/checkAuth';
import { categoryValidation } from '../../validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: The categories managing API
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - preview
 *         - title
 *         - description
 *       properties:
 *         preview:
 *           type: string
 *           description: The category preview
 *         title:
 *           type: string
 *           description: The category title
 *         description:
 *           type: string
 *           description: The category description
 *       example:
 *         preview: "http://localhost:9999/uploads/example.jpg"
 *         title: "Название категории"
 *         description: "Описание категории"
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Добавление новой категории.
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *     security:
 *       - bearerAuth: []
 */
router.post('/', categoryValidation, handleValidationError, checkAuth, categoriesController.create);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Удаление категории.
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The category id
 *     responses:
 *       200:
 *         description: The category was successfully removed
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', checkAuth, categoriesController.remove);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Получение всех категорий.
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: The list of categories
 *         content:
 *           application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Category'
 */
router.get('/', categoriesController.getAll);

export default router;
