const express = require('express');
const ComidaController = require('../controllers/comidasController');

const router = express.Router();

router.post('/registrar', ComidaController.registrarComida);
router.get('/:usuario_id', ComidaController.obtenerComidasPorUsuario);

module.exports = router;
