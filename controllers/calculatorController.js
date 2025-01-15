// controllers/caloriasController.js
const caloriasService = require('../services/calculatorService');

exports.calcularNecesidadesCaloricas = (req, res) => {
    const { sexo, edad, peso, altura, actividad, objetivo } = req.body;
    
    // Validación de los datos recibidos
    if (!sexo || !edad || !peso || !altura || !actividad || !objetivo) {
        return res.status(400).json({ error: 'Faltan datos necesarios.' });
    }
    
    try {
        const resultado = caloriasService.calcular(sexo, edad, peso, altura, actividad, objetivo);
        return res.status(200).json({ resultado });
    } catch (error) {
        return res.status(500).json({ error: 'Error al calcular las necesidades calóricas.' });
    }
};
