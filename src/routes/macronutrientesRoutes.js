const express = require('express');
const router = express.Router();
const { calcularMacronutrientes } = require('../controllers/macronutrientesController');

// Ruta para calcular los macronutrientes
router.post('/calcular', calcularMacronutrientes);

module.exports = router;
