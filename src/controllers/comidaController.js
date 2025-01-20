const { registrarComida, obtenerComidasPorUsuario } = require('../service/comidaService');

const registrarComidaController = async (req, res) => {
    const { usuario_id, fecha, comida, calorias, proteinas, carbohidratos, grasas } = req.body;

    try {
        const datos = {
            usuario_id: parseInt(usuario_id, 10),
            fecha,
            comida,
            calorias: parseInt(calorias, 10),
            proteinas: parseFloat(proteinas),
            carbohidratos: parseFloat(carbohidratos),
            grasas: parseFloat(grasas),
        };

        await registrarComida(datos);
        const comidas = await obtenerComidasPorUsuario(usuario_id);

        res.render('registroComidas', {
            success: 'Comida registrada exitosamente.',
            usuario_id,
            comidas,
        });
    } catch (error) {
        console.error('Error al registrar comida:', error.message);
        const comidas = await obtenerComidasPorUsuario(usuario_id);
        res.render('registroComidas', {
            error: error.message,
            usuario_id,
            comidas,
        });
    }
};

const mostrarRegistroComidas = async (req, res) => {
  try {
      const usuario_id = req.session?.user?.id; // Obtiene el usuario autenticado
      if (!usuario_id) return res.redirect('/login');

      // Llama al servicio para obtener las comidas
      const comidas = await obtenerComidasPorUsuario(usuario_id);
      console.log('Comidas obtenidas:', comidas); // Verifica las comidas obtenidas

      // Renderiza la vista y pasa las comidas al template
      res.render('registroComidas', { usuario_id, comidas });
  } catch (error) {
      console.error('Error al mostrar el formulario:', error.message);
      res.render('registroComidas', {
          error: 'Hubo un problema al cargar las comidas.',
          usuario_id: req.session?.user?.id || null,
          comidas: [],
      });
  }
};


module.exports = {
    registrarComidaController,
    mostrarRegistroComidas,
};
