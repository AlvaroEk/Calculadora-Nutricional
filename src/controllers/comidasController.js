const ComidaService = require('../services/comidaService');

const ComidaController = {
    async registrarComida(req, res) {
        try {
            const data = req.body;
            const result = await ComidaService.registrarComida(data);
            res.status(201).json({ message: 'Comida registrada exitosamente', result });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    async obtenerComidasPorUsuario(req, res) {
        try {
            const { usuario_id } = req.params;
            const comidas = await ComidaService.obtenerComidasPorUsuario(usuario_id);
            res.status(200).json(comidas);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};

module.exports = ComidaController;
