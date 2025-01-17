const axios = require('axios');

const BASE_URL = 'http://localhost:4000/api/usuarios'; // Asegúrate de que la URL sea correcta

class UsuarioModel {
    // Registrar usuario
    static async registrarUsuario({ nombre, correo, password }) {
        try {
            const response = await axios.post(`${BASE_URL}/registrar`, {
                nombre,
                correo,
                password
            });
            return response.data; // Retorna el mensaje de éxito
        } catch (error) {
            throw new Error(error.response ? error.response.data.error : 'Error al registrar usuario');
        }
    }

    // Iniciar sesión
    static async loginUsuario({ correo, password }) {
        try {
            const response = await axios.post(`${BASE_URL}/login`, {
                correo,
                password
            });
            return response.data; // Retorna el token y usuario
        } catch (error) {
            throw new Error(error.response ? error.response.data.error : 'Error al iniciar sesión');
        }
    }
}

module.exports = UsuarioModel;
