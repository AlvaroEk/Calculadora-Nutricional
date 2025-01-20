const express = require('express');
const ComidaController = require('../controllers/comidasController');

const router = express.Router();

router.post('/registrar', ComidaController.registrarComida);
router.get('/', ComidaController.obtenerComidasPorUsuario); // Cambiar para usar req.query

module.exports = router;
