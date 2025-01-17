const { generarPlanComidas } = require('../services/planificadorService');
const PlanComidasModel = require('../models/PlanComidasModel'); // Importar el modelo

const planificarComidas = (req, res) => {
  try {
    // Validar los datos recibidos usando el modelo
    const datosValidos = PlanComidasModel.validar(req.body);

    // Generar el plan de comidas
    const planDeComidas = generarPlanComidas(
      datosValidos.caloriasTotales,
      datosValidos.proteinasTotales,
      datosValidos.carbohidratosTotales,
      datosValidos.grasasTotales,
      datosValidos.comidas
    );

    // Responder con el plan de comidas generado
    res.status(200).json({ planDeComidas });
  } catch (error) {
    // Manejar errores de validación o generales
    res.status(400).json({ error: error.message });
  }
};

module.exports = { planificarComidas };
