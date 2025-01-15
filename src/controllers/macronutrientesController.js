const { calcularMacronutrientesService } = require('../service/macronutrientesService');

const calcularMacronutrientes = (req, res) => {
  const { calorias, distribucion, proteinas, carbohidratos, grasas } = req.body;

  try {
    // Validación básica de los datos
    if (!calorias || calorias <= 0) {
      throw new Error('Las calorías deben ser mayores a 0.');
    }

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
