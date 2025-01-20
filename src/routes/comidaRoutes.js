const express = require('express');
const { registrarComidaController, mostrarRegistroComidas } = require('../controllers/comidaController');

const router = express.Router();

// Ruta para mostrar el formulario de registro de comidas
router.get('/', mostrarRegistroComidas);

// Ruta para registrar una comida
router.post('/registrar', registrarComidaController);

module.exports = router;
