// routes/caloriasRoutes.js
const express = require('express');
const router = express.Router();
const caloriasController = require('../controllers/calculatorController');

// Ruta para calcular las necesidades calóricas
router.post('/calcular', caloriasController.calcularNecesidadesCaloricas);

module.exports = router;
