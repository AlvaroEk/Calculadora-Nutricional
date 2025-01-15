import express from 'express';
const caloriasController = await import('./controllers/formController.js');

const router = express.Router();

// Ruta para calcular las necesidades calóricas
router.post('/calcular', caloriasController.calcularNecesidadesCaloricas);

export default router;
