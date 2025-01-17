const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');

// Ruta para registrar un usuario
router.post('/register', UsuarioController.registrar); // Ruta para registrar usuario

// Ruta para iniciar sesión
router.post('/login', UsuarioController.login); // Ruta para iniciar sesión

router.get('/', (req, res) => {
    res.render('login'); // Ruta para mostrar el formulario de inicio de sesión
});

router.get('/register', (req, res) => {
    res.render('registro'); // Ruta para mostrar el formulario de registro
});

router.get('/logout', UsuarioController.logout); // Cambiar a GET si se utiliza un enlace de cierre de sesión

module.exports = router;
