import { Router} from 'express';
import { createSolicitudes, getSolicitud, getSolicitudes, deleteSolicitud, updateSolicitud } from '../../controllers/solicitud.controller';

const router = Router();

// /api/sucursales
router.get('/', getSolicitudes);
// /api/sucursales
router.post('/', createSolicitudes);
// /api/sucursales/:admsuc_numid
router.get('/:presol_numid', getSolicitud);
// /api/sucursales/:admsuc_numid
router.delete('/:presol_numid', deleteSolicitud);
// /api/sucursales/:admsuc_numid
router.put('/:presol_numid', updateSolicitud);

export default router;