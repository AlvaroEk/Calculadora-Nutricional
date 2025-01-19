const axios = require('axios');
const API_URL = 'http://localhost:4000/api/comidas';

const registrarComida = async (data) => {
  try {
    // Enviar los datos de la comida al backend para registrarlos
    const response = await axios.post(`${API_URL}/registrar`, data);
    return response.data; // Retornamos la respuesta del backend
  } catch (error) {
    console.error('Error al registrar la comida:', error.response?.data || error.message);
    throw new Error('No se pudo registrar la comida. Inténtalo nuevamente.');
  }
};

module.exports = { registrarComida };
