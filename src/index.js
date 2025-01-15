import express from 'express';
const caloriasController = await import('./controllers/formController.js');
const macronutrientes = await import('./controllers/macronutrientesController.js')

const router = express.Router();

// Ruta para calcular las necesidades calóricas
router.post('/calcular', caloriasController.calcularNecesidadesCaloricas);
router.post('/calcular', macronutrientes);

export default router;
