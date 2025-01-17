const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const router = express.Router();

router.post('/registrar', UsuarioController.registrar);
router.post('/login', UsuarioController.login);
router.get('/logout', UsuarioController.logout);

module.exports = router;
