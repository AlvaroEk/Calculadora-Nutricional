// models/macronutrientesModel.js

const validarDatosMacronutrientes = ({ calorias, distribucion, proteinas, carbohidratos, grasas }) => {
    if (!calorias || calorias <= 0) {
      throw new Error('Las calorías totales deben ser un número positivo.');
    }
  
    const distribucionesValidas = ['40-40-20', '50-30-20', 'personalizado'];
    if (!distribucionesValidas.includes(distribucion)) {
      throw new Error('La distribución debe ser "40-40-20", "50-30-20" o "personalizado".');
    }
  
    if (distribucion === 'personalizado') {
      if (
        !proteinas ||
        !carbohidratos ||
        !grasas ||
        proteinas + carbohidratos + grasas !== 100
      ) {
        throw new Error('En la distribución personalizada, los porcentajes deben sumar 100%.');
      }
  
      if (proteinas < 0 || carbohidratos < 0 || grasas < 0) {
        throw new Error('Los porcentajes de macronutrientes no pueden ser negativos.');
      }
    }
  
    return true;
  };
  
  module.exports = { validarDatosMacronutrientes };
  