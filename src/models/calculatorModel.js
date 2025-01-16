// models/caloriasModel.js

const validarDatos = (sexo, edad, peso, altura, actividad, objetivo) => {
  // Validación de los datos
  if (!sexo || !edad || !peso || !altura || !actividad || !objetivo) {
    throw new Error('Faltan datos necesarios.');
  }

  if (edad <= 0 || peso <= 0 || altura <= 0) {
    throw new Error('Edad, peso y altura deben ser mayores que 0.');
  }

  const actividadesValidas = ['sedentario', 'ligeramenteActivo', 'moderadamenteActivo', 'muyActivo', 'extraActivo'];
  if (!actividadesValidas.includes(actividad)) {
    throw new Error('Actividad no válida. Opciones válidas: "sedentario", "ligeramenteActivo", "moderadamenteActivo", "muyActivo", "extraActivo".');
  }

  const objetivosValidos = ['mantener', 'perder', 'ganar'];
  if (!objetivosValidos.includes(objetivo)) {
    throw new Error('Objetivo no válido. Opciones válidas: "mantener", "perder", "ganar".');
  }

  return true;
};

module.exports = { validarDatos };
