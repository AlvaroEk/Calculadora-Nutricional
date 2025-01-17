// models/planificadorModel.js
const validarDatosPlanDeComidas = (datos) => {
    const { caloriasTotales, proteinasTotales, carbohidratosTotales, grasasTotales, comidas } = datos;
  
    // Validar que las calorías y macronutrientes sean números positivos
    if (isNaN(caloriasTotales) || caloriasTotales <= 0) {
      throw new Error('Las calorías totales deben ser un número mayor a 0.');
    }
    if (isNaN(proteinasTotales) || proteinasTotales < 0) {
      throw new Error('Las proteínas totales deben ser un número mayor o igual a 0.');
    }
    if (isNaN(carbohidratosTotales) || carbohidratosTotales < 0) {
      throw new Error('Los carbohidratos totales deben ser un número mayor o igual a 0.');
    }
    if (isNaN(grasasTotales) || grasasTotales < 0) {
      throw new Error('Las grasas totales deben ser un número mayor o igual a 0.');
    }
    if (isNaN(comidas) || comidas <= 0) {
      throw new Error('El número de comidas debe ser un número mayor a 0.');
    }
  };
  
  module.exports = { validarDatosPlanDeComidas };
  