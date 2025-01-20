const axios = require('axios');

const registrarComida = async (data) => {
    try {
        const response = await axios.post('http://localhost:4000/api/comidas/registrar', data);
        console.log('Respuesta de la API (registro):', response.data);
        return response.data;
    } catch (error) {
        console.error('Error al registrar comida:', error.response?.data || error.message);
        throw new Error('No se pudo registrar la comida.');
    }
};

const obtenerComidasPorUsuario = async (usuario_id) => {
  try {
      console.log(`Obteniendo comidas para usuario_id: ${usuario_id}`); // Log para verificar
      const response = await axios.get(`http://localhost:4000/api/comidas?usuario_id=${usuario_id}`);
      console.log('Respuesta de la API (comidas):', response.data); // Log de la API

      // Devuelve las comidas directamente
      return response.data;
  } catch (error) {
      console.error('Error al obtener comidas:', error.response?.data || error.message);
      return []; // Devuelve un array vacío si ocurre un error
  }
};


module.exports = {
    registrarComida,
    obtenerComidasPorUsuario,
};
