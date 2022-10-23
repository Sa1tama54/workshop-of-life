import { Router } from 'express';
import handleValidationError from '../middlewares/handleValidationError';
import { reviewValidation } from '../validate';
import reviewsController from '../controllers/reviews.controller';
import checkAuth from '../middlewares/checkAuth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: The reviews managing API
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
 *     Review:
 *       type: object
 *       required:
 *         - fullName
 *         - rating
 *         - images
 *         - text
 *       properties:
 *         fullName:
 *           type: string
 *           description: The review fullName
 *         rating:
 *           type: number
 *           description: The review rating
 *         images:
 *           type: array
 *           description: The review images
 *         text:
 *           type: string
 *           description: The review text
 *       example:
 *         fullName: "Имя и фамилия"
 *         rating: 5
 *         images: ["http://localhost:9999/uploads/example.jpg", "http://localhost:9999/uploads/example.jpg"]
 *         text: "Текст отзыва"
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Добавление нового отзыва.
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: The review was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 */
router.post('/', reviewValidation, handleValidationError, reviewsController.create);

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Получение списка отзывов.
 *     tags: [Reviews]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Получение определенной страницы
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Лимит на кол-во получаемых отзывов на странице
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Сортировка по популярным(rating, по умолчанию) и по новизне(createdAt)
 *     responses:
 *        "200":
 *          description: The list of reviews.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Review'
 */
router.get('/', reviewsController.getAll);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     summary: Удаление отзыва.
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The review id
 *     responses:
 *       200:
 *        description: The review was deleted
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', checkAuth, reviewsController.remove);

export default router;
