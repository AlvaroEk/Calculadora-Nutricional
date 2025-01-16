// service/macronutrientesService.js
const axios = require('axios');
const { validarDatosMacronutrientes } = require('../models/macronutrientesModel');

const calcularMacronutrientesService = async (datos) => {
  try {
    // Validar los datos utilizando el Model
    validarDatosMacronutrientes(datos);

    console.log('Enviando datos a la API...', datos); // Verifica los datos antes de enviarlos

    const respuesta = await axios.post('http://localhost:4000/api/macronutrientes/calcular', datos);
    
    console.log('Respuesta de la API:', respuesta.data); // Muestra la respuesta
    return respuesta.data;
  } catch (error) {
    console.error('Error al calcular los macronutrientes:', error);
    throw new Error('No se pudo conectar con la API o los datos son incorrectos');
  }
};

module.exports = { calcularMacronutrientesService };
