import { Router} from 'express';
import { createSucursales, getSucursales, getSucursal, deleteSucursal } from '../../controllers/sucursal.controller';

const router = Router();

// /api/sucursales
router.get('/', getSucursales);
// /api/sucursales
router.post('/', createSucursales);
// /api/sucursales/:admsuc_numid
router.get('/:admsuc_numid', getSucursal);
// /api/sucursales/:admsuc_numid
router.delete('/:admsuc_numid', deleteSucursal);

export default router;