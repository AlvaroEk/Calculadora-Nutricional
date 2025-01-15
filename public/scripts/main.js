document.addEventListener('DOMContentLoaded', () => {
  // Referencias a elementos del DOM
  const distribucionSelect = document.getElementById('distribucion');
  const customInputs = document.getElementById('customInputs');
  const calculoMacronutrientesForm = document.getElementById('calculoMacronutrientesForm');

  // Función para manejar el cambio de la opción seleccionada en el select
  const toggleCustomInputs = () => {
    if (distribucionSelect.value === 'personalizado') {
      customInputs.style.display = 'block'; // Mostrar los campos personalizados
    } else {
      customInputs.style.display = 'none'; // Ocultar los campos personalizados
    }
  };

  // Evento para manejar los cambios en el select de distribución
  distribucionSelect.addEventListener('change', toggleCustomInputs);

  // Estado inicial al cargar la página
  toggleCustomInputs();

  // Validación de los porcentajes personalizados antes de enviar el formulario
  calculoMacronutrientesForm.addEventListener('submit', (event) => {
    if (distribucionSelect.value === 'personalizado') {
      const proteinas = parseInt(document.getElementById('proteinas').value) || 0;
      const carbohidratos = parseInt(document.getElementById('carbohidratos').value) || 0;
      const grasas = parseInt(document.getElementById('grasas').value) || 0;

      // Verificar que los porcentajes sumen 100
      if (proteinas + carbohidratos + grasas !== 100) {
        event.preventDefault(); // Prevenir el envío del formulario
        alert('Los porcentajes de macronutrientes deben sumar 100%.');
      }
    }
  });
});
