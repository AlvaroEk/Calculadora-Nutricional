const UsuarioModel = require('../models/usuarioModel');

class UsuarioService {
    // Registrar usuario
    static async registrarUsuario({ nombre, correo, password }) {
        return await UsuarioModel.registrarUsuario({ nombre, correo, password });
    }

    // Iniciar sesión
    static async loginUsuario({ correo, password }) {
        return await UsuarioModel.loginUsuario({ correo, password });
    }

    // Cerrar sesión
    static logout() {
        // Aquí puedes agregar lógica para eliminar el token si se usa en cookies
        // Si utilizas JWT almacenado en cookies, podrías hacer algo como:
        // res.clearCookie('authToken');
        // O si usas un token en el localStorage (front-end), puedes eliminarlo:
        localStorage.removeItem('authToken'); // Eliminar token en el front-end
    }
}

module.exports = UsuarioService;
