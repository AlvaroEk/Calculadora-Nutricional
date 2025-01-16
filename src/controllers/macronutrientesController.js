// controllers/macronutrientesController.js
const { calcularMacronutrientesService } = require('../services/macronutrientesService');

const calcularMacronutrientes = (req, res) => {
  const { calorias, distribucion, proteinas, carbohidratos, grasas } = req.body;

  try {
    // Llamada al servicio para calcular los macronutrientes
    const resultado = calcularMacronutrientesService({
      calorias: parseFloat(calorias),
      distribucion,
      proteinas: proteinas ? parseFloat(proteinas) : undefined,
      carbohidratos: carbohidratos ? parseFloat(carbohidratos) : undefined,
      grasas: grasas ? parseFloat(grasas) : undefined,
    });

    res.status(200).json({ resultado });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { calcularMacronutrientes };
