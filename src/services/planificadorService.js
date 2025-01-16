// services/planificadorService.js
const generarPlanComidas = (caloriasTotales, proteinasTotales, carbohidratosTotales, grasasTotales, comidas) => {
  // Calcular las porciones de cada macronutriente por comida con una mayor precisión
  const caloriasPorComida = (caloriasTotales / comidas);
  const proteinasPorComida = (proteinasTotales / comidas);
  const carbohidratosPorComida = (carbohidratosTotales / comidas);
  const grasasPorComida = (grasasTotales / comidas);

  // Crear el plan de comidas
  const planDeComidas = [];
  for (let i = 0; i < comidas; i++) {
    planDeComidas.push({
      comida: i + 1,
      calorias: parseFloat(caloriasPorComida.toFixed(2)),
      proteinas: parseFloat(proteinasPorComida.toFixed(2)),
      carbohidratos: parseFloat(carbohidratosPorComida.toFixed(2)),
      grasas: parseFloat(grasasPorComida.toFixed(2)),
    });
  }

  return planDeComidas;
};

module.exports = { generarPlanComidas };
