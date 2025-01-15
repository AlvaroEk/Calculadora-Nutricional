const { calcularMacronutrientesService } = require('../services/macronutrientesService');

const calcularMacronutrientes = (req, res) => {
  const { calorias, distribucion, proteinas, carbohidratos, grasas } = req.body;

  try {
    // Validación básica de las entradas
    if (!calorias || calorias <= 0) {
      throw new Error('Las calorías totales deben ser un número positivo.');
    }

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
