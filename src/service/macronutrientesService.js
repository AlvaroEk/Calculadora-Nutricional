const axios = require('axios');

const calcularMacronutrientes = async (datos) => {
  try {
    const response = await axios.post('http://localhost:4000/api/macronutrientes/calcular', datos);
  } catch (error) {
    console.error('Error al calcular los macronutrientes:', error.response?.data || error.message);
    throw new Error(error.response?.data.error || 'Error desconocido en la API');
  }
};

module.exports = { calcularMacronutrientes };
