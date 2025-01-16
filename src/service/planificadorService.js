// services/planificadorService.js
const axios = require('axios');

const generarPlanDeComidas = async (datosFormulario) => {
  try {
    const response = await axios.post('http://localhost:4000/api/planificador/planificar', datosFormulario);
    return response.data.planDeComidas;
  } catch (error) {
    throw new Error('Error en la solicitud al backend: ' + error.message);
  }
};

module.exports = { generarPlanDeComidas };
