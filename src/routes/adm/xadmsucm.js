import { Router} from 'express';
import { createSucursal } from '../../controllers/sucursal.controller';

const router = Router();


router.post('/', createSucursal);

export default router;