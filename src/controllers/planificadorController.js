const { generarPlanDeComidasService } = require('../service/planificadorService');

const generarPlanDeComidas = async (req, res) => {
  const { caloriasTotales, proteinasTotales, carbohidratosTotales, grasasTotales, comidas } = req.body;

  try {
    // Crear el objeto con los datos
    const datos = {
      caloriasTotales: parseFloat(caloriasTotales),
      proteinasTotales: parseFloat(proteinasTotales),
      carbohidratosTotales: parseFloat(carbohidratosTotales),
      grasasTotales: parseFloat(grasasTotales),
      comidas: parseInt(comidas, 10),
    };

    // Llamar al servicio para generar el plan de comidas
    const planDeComidas = await generarPlanDeComidasService(datos);

    // Verificar que el plan de comidas se haya generado correctamente
    if (planDeComidas && planDeComidas.length > 0) {
      // Renderizar la vista pasando el plan de comidas generado
      res.render('planificador', { planDeComidas });
    } else {
      // Si no se pudo generar, renderizar la vista con un mensaje
      res.render('planificador', { error: 'No se pudo generar el plan de comidas. Intenta nuevamente.' });
    }
  } catch (error) {
    // Manejo de errores, renderizando vista con mensaje de error
    res.render('planificador', { error: error.message });
  }
};

module.exports = { generarPlanDeComidas };
