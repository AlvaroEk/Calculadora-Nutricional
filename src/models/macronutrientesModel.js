// models/macronutrientesModel.js

const validarDatosMacronutrientes = (datos) => {
    const { calorias, distribucion, proteinas, carbohidratos, grasas } = datos;
  
    if (!calorias || calorias <= 0) {
      throw new Error('Las calorías deben ser mayores a 0.');
    }
  
    const distribucionesValidas = ['baja', 'moderada', 'alta'];
    if (!distribucionesValidas.includes(distribucion)) {
      throw new Error('La distribución debe ser una de las siguientes: baja, moderada, alta.');
    }
  
    if (proteinas && proteinas <= 0) {
      throw new Error('Las proteínas deben ser mayores a 0.');
    }
  
    if (carbohidratos && carbohidratos <= 0) {
      throw new Error('Los carbohidratos deben ser mayores a 0.');
    }
  
    if (grasas && grasas <= 0) {
      throw new Error('Las grasas deben ser mayores a 0.');
    }
  
    return true;
  };
  
  module.exports = { validarDatosMacronutrientes };
  