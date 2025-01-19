const { registrarComida } = require('../service/comidaService'); // Importamos el servicio

const registrarComidaController = async (req, res) => {
  // Obtenemos los datos del cuerpo de la solicitud (formulario)
  const { usuario_id, fecha, comida, calorias, proteinas, carbohidratos, grasas } = req.body;

  console.log('Datos recibidos del formulario:', req.body);

  try {
    // Crear el objeto con los datos
    const datos = {
      usuario_id: parseInt(usuario_id, 10), // Asegurarse de que el id sea un número
      fecha: fecha, // Asumimos que 'fecha' es una cadena en formato correcto
      comida: comida,
      calorias: parseInt(calorias, 10),
      proteinas: parseFloat(proteinas),
      carbohidratos: parseFloat(carbohidratos),
      grasas: parseFloat(grasas),
    };

    console.log('Datos enviados al servicio:', datos);

    // Llamar al servicio para registrar la comida
    const registrocomida = await registrarComida(datos);

    if (registrocomida && registrocomida.length > 0) {
      // Renderizar la vista pasando el plan de comidas generado
      res.render('registroComidas', { registrocomida }); // Cambiado a 'registroComidas'
    } else {
      // Si no se pudo generar, renderizar la vista con un mensaje
      res.render('registroComidas', { error: 'No se pudo generar el plan de comidas. Intenta nuevamente.' }); // Cambiado a 'registroComidas'
    }
  } catch (error) {
    // Manejo de errores, renderizando vista con mensaje de error
    res.render('registroComidas', { error: error.message }); // Cambiado a 'registroComidas'
  }
};

module.exports = { registrarComidaController };
