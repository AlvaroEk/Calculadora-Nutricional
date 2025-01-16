const express = require('express');
const router = express.Router();

// Importar las rutas específicas
const index = require('./index');
const planificador = require('./planificadorRoutes');

// Configurar las rutas
router.use('/', index); // Ruta principal
router.use('/planificador', planificador); // Ruta para /planificador

module.exports = router;
