const UsuarioService = require('../service/usuarioService');

class UsuarioController {
    // Registrar usuario
    static async registrar(req, res) {
        const { nombre, correo, password } = req.body;

        try {
            const response = await UsuarioService.registrarUsuario({ nombre, correo, password });
            console.log(response.message);
            res.redirect('/login'); // Redirigir a la página de login después del registro
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Ocurrió un error al registrar el usuario.');
        }
    }

    // Iniciar sesión
    static async login(req, res) {
        const { correo, password } = req.body;

        try {
            const { token, usuario } = await UsuarioService.loginUsuario({ correo, password });
            console.log('Token:', token);
            console.log('Usuario:', usuario);
            res.cookie('authToken', token, { httpOnly: true }); // Guardar token en cookie
            res.redirect('/'); // Redirigir a la página principal después de iniciar sesión
        } catch (error) {
            console.error(error.message);
            res.status(401).send('Credenciales incorrectas.');
        }
    }

    // Cerrar sesión
    static async logout(req, res) {
        try {
            // Llamamos al servicio para que elimine el token
            await UsuarioService.logout();

            // Limpiamos la cookie donde se guarda el token
            res.clearCookie('authToken');  // Elimina la cookie con el token

            // Redirigimos al login
            res.redirect('/login'); // Redirigir al login después de cerrar sesión
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error al cerrar sesión.');
        }
    }
}

module.exports = UsuarioController;
