const db = require('../conexion/db'); // Asegúrate de tener configurada tu conexión a la base de datos
const bcrypt = require('bcrypt'); // Para encriptar las contraseñas

class UsuarioModel {
    // Registrar usuario
    static async registrarUsuario({ nombre, correo, password }) {
        const hashedPassword = await bcrypt.hash(password, 10); // Encriptamos la contraseña
        const query = `
            INSERT INTO usuarios (nombre, correo, password)
            VALUES (?, ?, ?)`;
        return db.execute(query, [nombre, correo, hashedPassword]);
    }

    // Verificar usuario (login)
    static async verificarUsuario(correo) {
        const query = `SELECT * FROM usuarios WHERE correo = ?`;
        const [rows] = await db.execute(query, [correo]);
        return rows.length > 0 ? rows[0] : null; // Retorna el usuario si existe
    }
}

module.exports = UsuarioModel;
