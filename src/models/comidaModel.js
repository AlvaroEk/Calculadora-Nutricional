const pool = require('../conexion/db');

const ComidaModel = {
    async registrarComida(data) {
        const { usuario_id, fecha, comida, calorias, proteinas, carbohidratos, grasas } = data;
        const [result] = await pool.query(
            'INSERT INTO comidas (usuario_id, fecha, comida, calorias, proteinas, carbohidratos, grasas) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [usuario_id, fecha, comida, calorias, proteinas, carbohidratos, grasas]
        );
        return result;
    },
    async obtenerComidasPorUsuario(usuario_id) {
        const [rows] = await pool.query('SELECT * FROM comidas WHERE usuario_id = ?', [usuario_id]);
        return rows;
    },
};

module.exports = ComidaModel;
