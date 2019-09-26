//const express = require('express'); se cambia por import express

import express from 'express'; 
const app = express();
import authRoutes from './auth';

//const authRoutes = require('./auth');   se cambia por import authRoutes

app.use('/auth', authRoutes);

//app.use('')

app.listen(9000, function() {
    console.log("El servidor está escuchando por el puerto 9000...")
});