// controllers/macronutrientesController.js
const { calcularMacronutrientesService } = require('../service/macronutrientesService');

const calcularMacronutrientes = async (req, res) => {
  const { calorias, distribucion, proteinas, carbohidratos, grasas } = req.body;

  try {
    // Crear el objeto con los datos
    const datos = {
      calorias: parseFloat(calorias),
      distribucion,
      proteinas: proteinas ? parseFloat(proteinas) : undefined,
      carbohidratos: carbohidratos ? parseFloat(carbohidratos) : undefined,
      grasas: grasas ? parseFloat(grasas) : undefined,
    };

    // Llamar al service para calcular los macronutrientes
    const resultado = await calcularMacronutrientesService(datos);

    // Enviar la respuesta
    res.status(200).json({ resultado });
  } catch (error) {
    // Manejo de errores
    res.status(400).json({ error: error.message });
  }
};

module.exports = { calcularMacronutrientes };
