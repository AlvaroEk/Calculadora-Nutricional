const express = require('express');
const bodyParser = require('body-parser');
const caloriasRoutes = require('./routes/index');  // Rutas de la API

const app = express();

// Middleware para manejar JSON y formularios
app.use(bodyParser.json());  // Parsear cuerpos JSON
app.use(bodyParser.urlencoded({ extended: true }));  // Parsear formularios URL encoded

// Rutas de la API para el cálculo de calorías
app.use('/api/calorias', caloriasRoutes);  // Definir las rutas de la API

// Puerto del servidor API
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});
