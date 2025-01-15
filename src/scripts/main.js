document.getElementById('formulario').addEventListener('submit', async function(event) {
  event.preventDefault();

  const datos = {
    edad: document.getElementById('edad').value,
    peso: document.getElementById('peso').value,
    altura: document.getElementById('altura').value,
    actividad: document.getElementById('actividad').value,
    objetivo: document.getElementById('objetivo').value
  };

  try {
    // Asegúrate de que la URL de la API sea correcta
    const resultado = await calcularNutricion(datos);
    document.getElementById('resultado').innerHTML = `Calorías recomendadas: ${resultado.calorias}`;
  } catch (error) {
    document.getElementById('resultado').innerHTML = 'Error al calcular la nutrición. Intenta nuevamente.';
  }
});
