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

            // Guardar información del usuario en la sesión
            req.session.user = { id: usuario.id, nombre: usuario.nombre, correo: usuario.correo };

            // Guardar token en una cookie
            res.cookie('authToken', token, { httpOnly: true });

            // Redirigir a la página principal
            res.redirect('/');
        } catch (error) {
            console.error(error.message);
            res.status(401).send('Credenciales incorrectas.');
        }
    }

    // Cerrar sesión
    static async logout(req, res) {
        try {
            // Limpiar la información del usuario de la sesión
            req.session.destroy(err => {
                if (err) {
                    console.error('Error al destruir la sesión:', err.message);
                    return res.status(500).send('Error al cerrar sesión.');
                }

                // Limpiar la cookie del token
                res.clearCookie('authToken'); // Elimina la cookie con el token

                // Redirigir al login
                res.redirect('/login');
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Error al cerrar sesión.');
        }
    }

    // Mostrar formulario de registro de comidas
    static async mostrarRegistroComidas(req, res) {
        try {
            // Verificar si el usuario está autenticado
            if (!req.session?.user?.id) {
                return res.redirect('/login'); // Redirigir al login si no está autenticado
            }

            // Renderizar la vista con el usuario_id
            res.render('registroComidas', { usuario_id: req.session.user.id });
        } catch (error) {
            console.error('Error al cargar el formulario de registro de comidas:', error.message);
            res.status(500).send('Error al cargar el formulario.');
        }
    }
}

module.exports = UsuarioController;
