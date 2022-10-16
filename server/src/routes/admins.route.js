import { Router } from 'express';
import adminsController from '../controllers/admins.controller';
import handleValidationError from '../middlewares/handleValidationError';
import authValidation from '../validations/auth';

const router = Router();

router.post('/register', adminsController.register);
router.post('/login', authValidation, handleValidationError, adminsController.login);

export default router;
