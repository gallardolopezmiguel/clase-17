import express from 'express'; 
const app = express();
import authRoutes from './auth';

app.use('/auth', authRoutes);

