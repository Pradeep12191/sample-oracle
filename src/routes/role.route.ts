import { Router } from 'express';
import { add, get } from '../controller/role.controller';

const router = Router();

router.post('/role', add);

router.get('/role', get);

export { router as roleRoutes }