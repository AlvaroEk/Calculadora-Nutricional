// controllers/planificadorController.js
const { generarPlanComidas } = require('../services/planificadorService');

const planificarComidas = (req, res) => {
  const { caloriasTotales, proteinasTotales, carbohidratosTotales, grasasTotales, comidas } = req.body;

  // Verificación de datos válidos
  if (
    isNaN(caloriasTotales) ||
    isNaN(proteinasTotales) ||
    isNaN(carbohidratosTotales) ||
    isNaN(grasasTotales) ||
    isNaN(comidas)
  ) {
    return res.status(400).json({ error: 'Todos los campos deben ser números válidos.' });
  }

  try {
    // Generar el plan de comidas
    const planDeComidas = generarPlanComidas(
      parseFloat(caloriasTotales),
      parseFloat(proteinasTotales),
      parseFloat(carbohidratosTotales),
      parseFloat(grasasTotales),
      parseInt(comidas, 10)
    );

    // Verificar si se generó el plan correctamente
    if (!planDeComidas || planDeComidas.length === 0) {
      return res.status(400).json({ error: 'No se pudo generar el plan de comidas.' });
    }

    // Responder con el plan de comidas generado
    res.status(200).json({ planDeComidas });
  } catch (error) {
    console.error('Error al generar el plan de comidas:', error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { planificarComidas };
