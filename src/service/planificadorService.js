// services/planificadorService.js
const axios = require('axios');
const { validarDatosPlanDeComidas } = require('../models/planComidaModels');

const generarPlanDeComidasService = async (datosFormulario) => {
  try {
    // Validar los datos utilizando el Model
    validarDatosPlanDeComidas(datosFormulario);

    console.log('Enviando datos a la API...', datosFormulario); // Verifica los datos antes de enviarlos

    const response = await axios.post('http://localhost:4000/api/planificador/generar', datosFormulario);
    
    console.log('Respuesta de la API:', response.data); // Muestra la respuesta
    return response.data.planDeComidas;
  } catch (error) {
    console.error('Error al generar el plan de comidas:', error);
    throw new Error('No se pudo generar el plan de comidas o los datos son incorrectos');
  }
};

module.exports = { generarPlanDeComidasService };
