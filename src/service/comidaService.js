const { validarDatosComida } = require('../models/comidaModel');

const axios = require('axios');

const registrarComida = async (datos) => {
    try {
        validarDatosComida(datos); // Llama a la función de validación
        const response = await axios.post('http://localhost:4000/api/comidas/registrar', datos);
        return response.data;
    } catch (error) {
        console.error('Error al registrar comida:', error.message);
        throw new Error(error.message);
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
