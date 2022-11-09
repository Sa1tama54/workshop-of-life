import { Router } from 'express';
import checkAuth from '../middlewares/checkAuth';
import photosController from '../controllers/photos.controller';
import {} from '../validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Photos
 *   description: The photos managing API
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
 *     Photo:
 *       type: object
 *       required:
 *         - image
 *         - description
 *       properties:
 *         image:
 *           type: string
 *           description: The photo image
 *         description:
 *           type: string
 *           description: The photo description
 *       example:
 *         image: "http://localhost:9999/uploads/example.jpg"
 *         description: "Описание фотографии"
 */

/**
 * @swagger
 * /photos:
 *   post:
 *     summary: Добавление новой фотографии.
 *     tags: [Photos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Photo'
 *     responses:
 *       200:
 *         description: The photo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Photo'
 *     security:
 *       - bearerAuth: []
 */
router.post('/', checkAuth, photosController.create);

/**
 * @swagger
 * /photos:
 *   get:
 *     summary: Получение списка фотографий.
 *     tags: [Photos]
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
 *         description: Лимит на кол-во получаемых фотографий на странице
 *     responses:
 *        "200":
 *          description: The list of photos.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Photo'
 */
router.get('/', photosController.getAll);

/**
 * @swagger
 * /photos/{id}:
 *   patch:
 *     summary: Обновление фотографии.
 *     tags: [Photos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Photo'
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The photo id
 *     responses:
 *       200:
 *         description: The photo was successfully updated
 *     security:
 *       - bearerAuth: []
 */
router.patch('/:id', checkAuth, photosController.update);

/**
 * @swagger
 * /photos/{id}:
 *   delete:
 *     summary: Удаление фотографии.
 *     tags: [Photos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The photo id
 *     responses:
 *       200:
 *        description: The photo was deleted
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', checkAuth, photosController.remove);

export default router;
