const validarDatos = (datos) => {
  const { sexo, edad, peso, altura, actividad, objetivo } = datos;

  if (!sexo || !edad || !peso || !altura || !actividad || !objetivo) {
    throw new Error('Todos los campos son obligatorios.');
  }

  if (edad <= 0 || peso <= 0 || altura <= 0) {
    throw new Error('Edad, peso y altura deben ser mayores a 0.');
  }

  const actividadesValidas = ['baja', 'moderada', 'alta'];
  if (!actividadesValidas.includes(actividad)) {
    throw new Error('La actividad debe ser una de las siguientes: baja, moderada, alta.');
  }

  const objetivosValidos = ['mantener', 'perder', 'ganar'];
  if (!objetivosValidos.includes(objetivo)) {
    throw new Error('El objetivo debe ser uno de los siguientes: mantener, perder, ganar.');
  }

  return true;
};

module.exports = { validarDatos };
