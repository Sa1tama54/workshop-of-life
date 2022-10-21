import { Router } from 'express';
import adminsRoute from './admins.route';
import categoriesRoute from './categories.route';
import servicesRoute from './services.route';
import productsRoute from './products.route';
import vacanciesRoute from './vacancies.route';
import photoRoute from './photos.route';

const router = Router();

router.use('/admins', adminsRoute);
router.use('/categories', categoriesRoute);
router.use('/services', servicesRoute);
router.use('/products', productsRoute);
router.use('/vacancies', vacanciesRoute);
router.use('/photos', photoRoute);

export default router;
