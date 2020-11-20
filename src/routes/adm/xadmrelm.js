import { Router} from 'express';
import "@babel/polyfill"
import { createRelacionados, getRelacionados, 
        getRelacionado, updateRelacionado, 
        deleteRelacionado ,getRelacionadoBySucursal } from '../../controllers/relacionado.controller'
 
const router = Router();

// /api/relacionados
router.get('/', getRelacionados);
// /api/relacionados
router.post('/', createRelacionados);
// /api/relacionados/:admrel_numid
router.get('/:admrel_numid', getRelacionado);
// /api/relacionados/:admrel_numid
router.delete('/:admrel_numid', deleteRelacionado);
// /api/relacionados/:admrel_numid
router.put('/:admrel_numid', updateRelacionado);

export default router;