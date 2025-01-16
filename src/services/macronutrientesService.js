// services/macronutrientesService.js
const { validarDatosMacronutrientes } = require('../models/macronutrientesModel');

const calcularMacronutrientesService = ({ calorias, distribucion, proteinas, carbohidratos, grasas }) => {
  // Validar los datos con el Model
  validarDatosMacronutrientes({ calorias, distribucion, proteinas, carbohidratos, grasas });

  let porcProteinas, porcCarbohidratos, porcGrasas;

  // Distribuciones predeterminadas
  if (distribucion === '40-40-20') {
    porcProteinas = 40;
    porcCarbohidratos = 40;
    porcGrasas = 20;
  } else if (distribucion === '50-30-20') {
    porcProteinas = 50;
    porcCarbohidratos = 30;
    porcGrasas = 20;
  } else if (distribucion === 'personalizado') {
    porcProteinas = proteinas;
    porcCarbohidratos = carbohidratos;
    porcGrasas = grasas;
  } else {
    throw new Error('Distribución inválida.');
  }

  // Cálculo de gramos a partir de las calorías
  const gramosProteinas = ((calorias * porcProteinas) / 100) / 4;
  const gramosCarbohidratos = ((calorias * porcCarbohidratos) / 100) / 4;
  const gramosGrasas = ((calorias * porcGrasas) / 100) / 9;

  return {
    proteinas: gramosProteinas.toFixed(2),
    carbohidratos: gramosCarbohidratos.toFixed(2),
    grasas: gramosGrasas.toFixed(2),
  };
};

module.exports = { calcularMacronutrientesService };
