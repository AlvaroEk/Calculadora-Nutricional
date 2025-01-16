// routes/planificador.js
const express = require('express');
const router = express.Router();
const { planificarComidas } = require('../controllers/planificadorController');

// Ruta para generar el plan de comidas
router.post('/generar', planificarComidas);

module.exports = router;
