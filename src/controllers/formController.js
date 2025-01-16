// controllers/nutricionController.js
const calcularNutricion = require('../service/apiService');

const calcularBtn = document.getElementById('calcularBtn');
calcularBtn.addEventListener('click', async (event) => {
  event.preventDefault();  // Evitar el comportamiento por defecto del formulario

  const sexo = document.getElementById('sexo').value;
  const edad = document.getElementById('edad').value;
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const actividad = document.getElementById('actividad').value;
  const objetivo = document.getElementById('objetivo').value;

  // Validar campos antes de enviar
  if (!sexo || !edad || !peso || !altura || !actividad || !objetivo) {
    return alert('Por favor, completa todos los campos.');
  }

  try {
    const datos = { sexo, edad, peso, altura, actividad, objetivo };
    
    // Log de los datos que se envían
    console.log('Datos enviados a la API:', datos);

    const resultado = await calcularNutricion(datos);

    // Log de la respuesta de la API
    console.log('Datos recibidos de la API:', resultado);

    // Comprobar si la respuesta tiene la estructura correcta
    if (!resultado?.resultado?.caloriasDiarias) {
      alert('No se pudo calcular las calorías. Intenta de nuevo.');
      return;
    }

    const calorias = resultado.resultado.caloriasDiarias;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `Tus necesidades calóricas diarias son: ${calorias} kcal`;
  } catch (error) {
    console.error('Error al calcular las calorías:', error);
    alert('Hubo un error al calcular las necesidades calóricas. Por favor, intenta de nuevo.');
  }
});
