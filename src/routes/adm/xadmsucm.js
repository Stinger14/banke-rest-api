import { Router} from 'express';
import "@babel/polyfill"
import { createSucursales, getSucursales, getSucursal, deleteSucursal, updateSucursal } from '../../controllers/sucursal.controller';

const router = Router();

// /api/sucursales
router.get('/', getSucursales);
// /api/sucursales
router.post('/', createSucursales);
// /api/sucursales/:admsuc_numid
router.get('/:admsuc_numid', getSucursal);
// /api/sucursales/:admsuc_numid
router.delete('/:admsuc_numid', deleteSucursal);

// /api/sucursales/:admsuc_numid
router.put('/:admsuc_numid', updateSucursal);

export default router;