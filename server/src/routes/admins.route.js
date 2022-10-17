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
 */
router.post('/login', authValidation, handleValidationError, adminsController.login);

export default router;
