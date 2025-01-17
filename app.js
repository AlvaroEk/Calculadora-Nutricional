const express = require('express');
const bodyParser = require('body-parser');
const caloriasRoutes = require('./src/routes/index');  // Rutas de la API
const macronutrientesRoutes = require('./src/routes/macronutrientesRoutes');
const planificadorRoutes = require('./src/routes/planificadorRoutes');
const userRoutes = require('./src/routes/userRoute')
const session = require('express-session');

const app = express();

// Configuración de la sesión
app.use(session({
    secret: 'secreto_super_seguro', 
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Si usas HTTPS, pon esto como `true`
}));

// Middleware para manejar JSON y formularios
app.use(bodyParser.json());  // Parsear cuerpos JSON
app.use(bodyParser.urlencoded({ extended: true }));  // Parsear formularios URL encoded

// Rutas de la API para el cálculo de calorías
app.use('/api/calorias', caloriasRoutes);  // Definir las rutas de la API
app.use('/api/macronutrientes', macronutrientesRoutes);
app.use('/api/planificador', planificadorRoutes);
app.use('/api/usuarios', userRoutes);
// Puerto del servidor API
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});
