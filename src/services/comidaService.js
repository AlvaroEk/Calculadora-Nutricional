const ComidaModel = require('../models/comidaModel');

const ComidaService = {
    async registrarComida(data) {
        if (!data.usuario_id || !data.fecha || !data.comida || !data.calorias) {
            throw new Error('Todos los campos son obligatorios');
        }
        return await ComidaModel.registrarComida(data);
    },
    async obtenerComidasPorUsuario(usuario_id) {
        return await ComidaModel.obtenerComidasPorUsuario(usuario_id);
    },
};

module.exports = ComidaService;
