import express, { json } from 'express';
import morgan from 'morgan';

// Importing routes
import sucursalRoutes from './routes/adm/xadmsucm';
import relacionadoRoutes from './routes/adm/xadmrelm';
import solicitudRoutes from './routes/pre/epresolm';

// App init
const app = express();

// Middlewares
app.use(morgan('dev')); // Show requests on console (debug)
app.use(json());    // Understand json requests

// Routes
app.use('/api/sucursal', sucursalRoutes);
app.use('/api/relacionados', relacionadoRoutes);
app.use('/api/solicitudes', solicitudRoutes);


export default app;
