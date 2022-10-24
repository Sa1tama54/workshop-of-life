import { Router } from 'express';
import handleValidationError from '../middlewares/handleValidationError';
import { requestValidation } from '../validate';
import checkAuth from '../middlewares/checkAuth';
import requestsController from '../controllers/requests.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Requests
 *   description: The requests managing API
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
 *     Request:
 *       type: object
 *       required:
 *         - fullName
 *         - tel
 *         - service
 *       properties:
 *         fullName:
 *           type: string
 *           description: The request fullName
 *         tel:
 *           type: number
 *           description: The request tel
 *         service:
 *           type: ObjectId
 *           description: The request service
 *       example:
 *         fullName: "Имя и фамилия"
 *         tel: 88005553535
 *         service: s7syd9fys7dyfds9sdyf7sdyf
 */

/**
 * @swagger
 * /requests:
 *   post:
 *     summary: Отправка заявки.
 *     tags: [Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Request'
 *     responses:
 *       200:
 *         description: The request was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Request'
 */
router.post('/', requestValidation, handleValidationError, requestsController.create);

/**
 * @swagger
 * /requests:
 *   get:
 *     summary: Получение списка заявок.
 *     tags: [Requests]
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
 *         description: Сортировка по дате(DESC по умолчанию и ASC)
 *     responses:
 *        "200":
 *          description: The list of requests.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Request'
 *     security:
 *       - bearerAuth: []
 */
router.get('/', checkAuth, requestsController.getAll);

/**
 * @swagger
 * /requests/{id}:
 *   delete:
 *     summary: Удаление заявки.
 *     tags: [Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The request id
 *     responses:
 *       200:
 *        description: The request was deleted
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', checkAuth, requestsController.remove);

export default router;
