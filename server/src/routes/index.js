import { Router } from 'express';
import adminsRoute from './admins.route';
import categoriesRoute from './categories.route';

const router = Router();

router.use('/admins', adminsRoute);
router.use('/categories', categoriesRoute);

export default router;
