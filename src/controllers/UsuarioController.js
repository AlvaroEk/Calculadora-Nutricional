const UsuarioService = require('../services/UsuarioService');

class UsuarioController {
    // Registro de usuario
    static async registrar(req, res) {
        const { nombre, correo, password } = req.body;

        try {
            await UsuarioService.registrarUsuario({ nombre, correo, password });
            res.status(201).json({ message: 'Usuario registrado exitosamente' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Inicio de sesión
    static async login(req, res) {
        const { correo, password } = req.body;

        try {
            const { usuario, token } = await UsuarioService.loginUsuario({ correo, password });
            // Guardar usuario en la sesión
            req.session.usuario = usuario;
            req.session.token = token;

            res.status(200).json({ message: 'Inicio de sesión exitoso', token, usuario });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Cerrar sesión
    static logout(req, res) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).json({ error: 'No se pudo cerrar sesión' });
            }
            res.status(200).json({ message: 'Sesión cerrada correctamente' });
        });
    }
}

module.exports = UsuarioController;
