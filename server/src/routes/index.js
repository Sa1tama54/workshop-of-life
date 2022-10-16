import { Router } from 'express';
import adminsRoute from './admins.route';

const router = Router();

router.use('/admins', adminsRoute);

export default router;
