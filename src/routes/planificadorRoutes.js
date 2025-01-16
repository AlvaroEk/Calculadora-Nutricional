const express = require('express');
const router = express.Router();

// Importar el controlador
const { generarPlanDeComidas } = require('../controllers/planificadorController');

// Ruta GET para renderizar la vista inicial del planificador
router.get('/', (req, res) => {
  res.render('planificador', { planDeComidas: null, error: null }); // Renderiza vista vacía al inicio
});

// Ruta POST para manejar la generación del plan de comidas
router.post('/generar', generarPlanDeComidas);

module.exports = router;
