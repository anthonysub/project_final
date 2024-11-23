import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';


import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/task.routes.js';   


const app = express();
// Middleware de morgan para registrar las solicitudes HTTP

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(morgan('dev'));// Aquí es donde se configura morgan para registrar las solicitudes
app.use(express.json());
app.use(cookieParser());// convierte los tokens a las cookies

//usar las rutas de autenticacion
app.use("/api",authRoutes);
app.use("/api",taskRoutes);

export default app;