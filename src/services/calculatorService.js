// services/caloriasService.js
const calcular = (sexo, edad, peso, altura, actividad, objetivo) => {
  // Ecuación de Mifflin-St Jeor
  let geb;
  if (sexo === 'masculino') {
      geb = 10 * peso + 6.25 * altura - 5 * edad + 5; // Harris-Benedict
  } else {
      geb = 10 * peso + 6.25 * altura - 5 * edad - 161; // Harris-Benedict para mujeres
  }

  // Ajuste según nivel de actividad física
  let get;
  switch (actividad) {
      case 'sedentario':
          get = geb * 1.2;
          break;
      case 'ligeramenteActivo':
          get = geb * 1.375;
          break;
      case 'moderadamenteActivo':
          get = geb * 1.55;
          break;
      case 'muyActivo':
          get = geb * 1.725;
          break;
      case 'extraActivo':
          get = geb * 1.9;
          break;
      default:
          throw new Error('Nivel de actividad no válido');
  }

  // Ajuste según el objetivo
  let caloriasDiarias;
  if (objetivo === 'mantener') {
      caloriasDiarias = get;
  } else if (objetivo === 'perder') {
      caloriasDiarias = get - 500; // Déficit calórico
  } else if (objetivo === 'ganar') {
      caloriasDiarias = get + 500; // Excedente calórico
  } else {
      throw new Error('Objetivo no válido');
  }

  return { caloriasDiarias };
};

module.exports = { calcular };
