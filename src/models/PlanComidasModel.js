class PlanComidasModel {
    static validar(datos) {
      const { caloriasTotales, proteinasTotales, carbohidratosTotales, grasasTotales, comidas } = datos;
  
      // Verificar que todos los campos requeridos están presentes y son números válidos
      if (
        caloriasTotales == null || isNaN(caloriasTotales) ||
        proteinasTotales == null || isNaN(proteinasTotales) ||
        carbohidratosTotales == null || isNaN(carbohidratosTotales) ||
        grasasTotales == null || isNaN(grasasTotales) ||
        comidas == null || isNaN(comidas)
      ) {
        throw new Error('Todos los campos (calorías, proteínas, carbohidratos, grasas, comidas) son requeridos y deben ser números.');
      }
  
      // Retornar los datos validados y asegurarse de que sean del tipo correcto
      return {
        caloriasTotales: parseFloat(caloriasTotales),
        proteinasTotales: parseFloat(proteinasTotales),
        carbohidratosTotales: parseFloat(carbohidratosTotales),
        grasasTotales: parseFloat(grasasTotales),
        comidas: parseInt(comidas, 10),
      };
    }
  }
  
  module.exports = PlanComidasModel;
  