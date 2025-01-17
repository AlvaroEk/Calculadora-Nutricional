const UsuarioModel = require('../models/UsuarioModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || 'secreto_super_seguro';

class UsuarioService {
    // Registrar usuario
    static async registrarUsuario({ nombre, correo, password }) {
        // Verificar si el usuario ya existe
        const usuarioExistente = await UsuarioModel.verificarUsuario(correo);
        if (usuarioExistente) {
            throw new Error('El usuario ya está registrado');
        }

        // Registrar usuario en la base de datos
        return UsuarioModel.registrarUsuario({ nombre, correo, password });
    }

    // Inicio de sesión
    static async loginUsuario({ correo, password }) {
        // Verificar si el usuario existe
        const usuario = await UsuarioModel.verificarUsuario(correo);
        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }

        // Verificar la contraseña
        const isValidPassword = await bcrypt.compare(password, usuario.password);
        if (!isValidPassword) {
            throw new Error('Contraseña incorrecta');
        }

        // Crear token JWT
        const token = jwt.sign({ id: usuario.id, correo: usuario.correo }, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

        return { usuario, token };
    }
}

module.exports = UsuarioService;
