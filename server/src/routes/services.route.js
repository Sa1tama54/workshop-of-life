import { Router } from 'express';
import servicesValidation from '../validations/services';
import handleValidationError from '../middlewares/handleValidationError';
import servicesController from '../controllers/services.controller';
import checkAuth from '../middlewares/checkAuth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Services
 *   description: The services managing API
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
 *     Service:
 *       type: object
 *       required:
 *         - title
 *         - preview
 *         - category
 *       properties:
 *         title:
 *           type: string
 *           description: The service title
 *         preview:
 *           type: string
 *           description: The service preview
 *         category:
 *           type: ObjectId
 *           description: The service category
 *       example:
 *         title: "Ремонт кондиционера"
 *         preview: "http://localhost:9999/uploads/example.jpg"
 *         category: fs8tfs8d7ftsdy7f8sdtf
 */

/**
 * @swagger
 * /services:
 *   post:
 *     summary: Добавление новой услуги.
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       200:
 *         description: The service was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *     security:
 *       - bearerAuth: []
 */
router.post('/', checkAuth, servicesValidation, handleValidationError, servicesController.create);

/**
 * @swagger
 * /services:
 *   get:
 *     summary: Получение услуг.
 *     tags: [Services]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Получение определенного кол-ва страниц
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Лимит на кол-во получаемых услуг на странице
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Поиск определенных услуг
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Фильтрация по категориям
 *     responses:
 *        "200":
 *          description: The list of services.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Service'
 */
router.get('/', servicesController.getAll);

/**
 * @swagger
 * /services/{id}:
 *   patch:
 *     summary: Изменение услуги.
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service id
 *     responses:
 *       200:
 *         description: The service was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *     security:
 *       - bearerAuth: []
 */
router.patch(
  '/:id',
  checkAuth,
  servicesValidation,
  handleValidationError,
  servicesController.update
);

/**
 * @swagger
 * /services/{id}:
 *   delete:
 *     summary: Удаление услуги.
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The service id
 *     responses:
 *       200:
 *        description: The service was deleted
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', checkAuth, servicesController.remove);

export default router;
