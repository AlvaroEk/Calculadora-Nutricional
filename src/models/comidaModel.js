const validarDatosComida = (datos) => {
    const { usuario_id, fecha, comida, calorias, proteinas, carbohidratos, grasas } = datos;

    // Validación de campos obligatorios
    if (!usuario_id || !fecha || !comida || calorias === undefined || proteinas === undefined || carbohidratos === undefined || grasas === undefined) {
        throw new Error('Todos los campos son obligatorios.');
    }

    // Validación de tipos de datos
    if (typeof usuario_id !== 'number' || usuario_id <= 0) {
        throw new Error('El usuario_id debe ser un número mayor a 0.');
    }

    if (isNaN(Date.parse(fecha))) {
        throw new Error('La fecha debe ser válida.');
    }

    if (typeof comida !== 'string' || comida.trim() === '') {
        throw new Error('El nombre de la comida debe ser un texto válido.');
    }

    if (typeof calorias !== 'number' || calorias < 0) {
        throw new Error('Las calorías deben ser un número mayor o igual a 0.');
    }

    if (typeof proteinas !== 'number' || proteinas < 0) {
        throw new Error('Las proteínas deben ser un número mayor o igual a 0.');
    }

    if (typeof carbohidratos !== 'number' || carbohidratos < 0) {
        throw new Error('Los carbohidratos deben ser un número mayor o igual a 0.');
    }

    if (typeof grasas !== 'number' || grasas < 0) {
        throw new Error('Las grasas deben ser un número mayor o igual a 0.');
    }

    return true; // Si todos los datos son válidos, retorna true
};

module.exports = { validarDatosComida };
