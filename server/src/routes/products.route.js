import { Router } from 'express';
import handleValidationError from '../middlewares/handleValidationError';
import productsController from '../controllers/products.controller';
import checkAuth from '../middlewares/checkAuth';
import { productValidation } from '../../validate';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The products managing API
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
 *     Product:
 *       type: object
 *       required:
 *         - preview
 *         - title
 *         - description
 *         - price
 *       properties:
 *         preview:
 *           type: string
 *           description: The product preview
 *         title:
 *           type: string
 *           description: The product title
 *         description:
 *           type: string
 *           description: The product description
 *         price:
 *           type: number
 *           description: The product price
 *       example:
 *         preview: "http://localhost:9999/uploads/example.jpg"
 *         title: "Название продукта"
 *         description: "Описание продукта"
 *         price: 1000
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Добавление нового товара.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: The product was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *     security:
 *       - bearerAuth: []
 */
router.post('/', checkAuth, productValidation, handleValidationError, productsController.create);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Получение списка товаров.
 *     tags: [Products]
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
 *         name: sort
 *         schema:
 *           type: string
 *         description: Сортировка товаров по цене DESC/ASC(сначала дорогие/недорогие)
 *     responses:
 *        "200":
 *          description: The list of products.
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Product'
 */
router.get('/', productsController.getAll);

/**
 * @swagger
 * /products/{id}:
 *   patch:
 *     summary: Изменение товара.
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product was successfully updated
 *     security:
 *       - bearerAuth: []
 */
router.patch(
  '/:id',
  checkAuth,
  productValidation,
  handleValidationError,
  productsController.update
);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Удаление товара.
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: The product was successfully removed
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', checkAuth, productsController.remove);

export default router;
