const express = require('express');
const router = express.Router();

// Importar los controladores de comida
const { registrarComidaController } = require('../controllers/comidaController');

// Ruta GET para mostrar el formulario de registro de comida
router.get('/', (req, res) => {
  // Obtener el usuario_id dinámicamente desde la sesión o un valor predeterminado
  const usuario_id = req.session?.user?.id || 1; // Ajusta según tu lógica de autenticación
  res.render('registroComidas', { usuario_id });
});

// Ruta POST para registrar una comida
router.post('/registrar', registrarComidaController);

module.exports = router;
