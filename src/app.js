import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';

const app = express();
// Middleware de morgan para registrar las solicitudes HTTP
app.use(morgan('dev'));// Aquí es donde se configura morgan para registrar las solicitudes
app.use(express.json());
app.use(cookieParser());// convierte los tokens a las cookies

//usar las rutas de autenticacion
app.use("/api",authRoutes);

export default app;