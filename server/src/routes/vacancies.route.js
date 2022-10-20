import { Router } from 'express';
import handleValidationError from '../middlewares/handleValidationError';
import vacanciesValidation from '../validations/vacancies';
import vacanciesController from '../controllers/vacancies.controller';
import checkAuth from '../middlewares/checkAuth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Vacancies
 *   description: The vacancies managing API
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
 *     Vacancy:
 *       type: object
 *       required:
 *         - image
 *         - title
 *         - price
 *         - graphic
 *         - experience
 *         - tel
 *       properties:
 *         image:
 *           type: string
 *           description: The vacancy image
 *         title:
 *           type: string
 *           description: The vacancy title
 *         price:
 *           type: number
 *           description: The vacancy price
 *         graphic:
 *           type: string
 *           description: The vacancy graphic
 *         experience:
 *           type: string
 *           description: The vacancy experience
 *         tel:
 *           type: number
 *           description: The vacancy tel
 *       example:
 *         image: "http://localhost:9999/uploads/example.jpg"
 *         title: "Заголовок вакансии"
 *         price: 1000
 *         graphic: "График работы"
 *         experience: "Опыт работы"
 *         tel: 88005553535
 */

/**
 * @swagger
 * /vacancies:
 *   post:
 *     summary: Добавление новой вакансии.
 *     tags: [Vacancies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vacancy'
 *     responses:
 *       200:
 *         description: The vacancy was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Vacancy'
 *     security:
 *       - bearerAuth: []
 */
router.post('/', checkAuth, vacanciesValidation, handleValidationError, vacanciesController.create);

/**
 * @swagger
 * /vacancies:
 *   get:
 *     summary: Получение списка ваканский.
 *     tags: [Vacancies]
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
 *         description: Лимит на кол-во получаемых вакансий на странице
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Поиск определенных вакансий
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Сортировка вакансий по дате DESC/ASC
 *     responses:
 *        "200":
 *          description: The list of vacancies.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Vacancy'
 */
router.get('/', vacanciesController.getAll);

/**
 * @swagger
 * /vacancies/{id}:
 *   patch:
 *     summary: Изменение вакансии.
 *     tags: [Vacancies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Vacancy'
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The vacancy id
 *     responses:
 *       200:
 *         description: The vacancy was successfully updated
 *     security:
 *       - bearerAuth: []
 */
router.patch(
  '/:id',
  checkAuth,
  vacanciesValidation,
  handleValidationError,
  vacanciesController.update
);

/**
 * @swagger
 * /vacancies/{id}:
 *   delete:
 *     summary: Удаление вакансии.
 *     tags: [Vacancies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The vacancy id
 *     responses:
 *       200:
 *        description: The vacancy was deleted
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', checkAuth, vacanciesController.remove);

export default router;
