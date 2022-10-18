import { Router } from 'express';
import adminsRoute from './admins.route';
import categoriesRoute from './categories.route';
import servicesRoute from './services.route';

const router = Router();

router.use('/admins', adminsRoute);
router.use('/categories', categoriesRoute);
router.use('/services', servicesRoute);

export default router;
