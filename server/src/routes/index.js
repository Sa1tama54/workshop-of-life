import { Router } from 'express';
import adminsRoute from './admins.route';
import categoriesRoute from './categories.route';
import servicesRoute from './services.route';
import productsRoute from './products.route';
import vacanciesRoute from './vacancies.route';
import photosRoute from './photos.route';
import reviewsRoute from './reviews.route';
import requestsRoute from './request.route';

const router = Router();

router.use('/admin', adminsRoute);
router.use('/categories', categoriesRoute);
router.use('/services', servicesRoute);
router.use('/products', productsRoute);
router.use('/vacancies', vacanciesRoute);
router.use('/photos', photosRoute);
router.use('/reviews', reviewsRoute);
router.use('/requests', requestsRoute);

export default router;
