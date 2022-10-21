import { Router } from 'express';
import adminsController from '../controllers/admins.controller';
import handleValidationError from '../middlewares/handleValidationError';
import authValidation from '../validations/auth';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Admins
 *   description: The admins managing API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - login
 *         - password:
 *       properties:
 *         login:
 *           type: string
 *           description: The admin login
 *         password:
 *           type: string
 *           description: The admin password
 *       example:
 *         login: "exampleLogin"
 *         password: "12345"
 */

/**
 * @swagger
 * /admins/register:
 *   post:
 *     summary: Регистрация админа.
 *     tags: [Admins]
 */
router.post('/register', adminsController.register);

/**
 * @swagger
 * /admins/login:
 *   post:
 *     summary: Авторизация админа.
 *     tags: [Admins]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 */
router.post('/login', authValidation, handleValidationError, adminsController.login);

export default router;
