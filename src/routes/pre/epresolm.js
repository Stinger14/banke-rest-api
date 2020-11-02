import { Router} from 'express';
import { createSolicitudes, getSolicitud, getSolicitudes, deleteSolicitud, updateSolicitud, getSolicitudBySucursal } from '../../controllers/solicitud.controller';

const router = Router();

// /api/solicitudes
router.get('/', getSolicitudes);
// /api/solicitudes
router.post('/', createSolicitudes);
// /api/solicitudes/:admsuc_numid
router.get('/:presol_numid', getSolicitud);
// /api/solicitudes/:admsuc_numid
router.delete('/:presol_numid', deleteSolicitud);
// /api/solicitudes/:admsuc_numid
router.put('/:presol_numid', updateSolicitud);
// /api/solicitudes/sucursales/:presol_numid
router.get('/sucursales/:admsuc_numid', getSolicitudBySucursal);

export default router;