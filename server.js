const express = require('express');
const path = require('path');
const axios = require('axios');
const session = require('express-session'); // Middleware para manejar sesiones
const UsuarioModel = require('./src/models/usuarioModel');
const app = express();
const routes = require('./src/routes/routes');
const userRouter = require('./src/routes/userRoutes');
const comidaRoutes = require('./src/routes/comidaRoutes');

// Configurar el middleware de sesión
app.use(session({
    secret: 'mi_secreto_seguro', // Cambia esto por algo más seguro
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Usa `true` solo si usas HTTPS
}));

// Middleware para pasar variables locales a las vistas
app.use((req, res, next) => {
    res.locals.usuario_id = req.session?.user?.id || null; // Ajusta según tu sistema de autenticación
    next();
});

// Middleware para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el motor de vistas y la carpeta de vistas
app.set('views', path.join(__dirname, 'src', 'views')); // Apunta a src/views
app.set('view engine', 'pug');

// Rutas para login, registro y logout
app.use('/login', (req, res) => res.render('login'));
app.use('/register', (req, res) => res.render('register'));
app.use('/logout', (req, res) => res.render('index'));

// Rutas de comida
app.use('/registro', comidaRoutes);

// Servir archivos estáticos (JS, CSS, imágenes)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rutas principales
app.use('/', routes);
app.use('/user', userRouter); // API para usuarios

// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index');
});

// Otras rutas para cálculos y planificación
app.post('/calcular', async (req, res) => {
    const { sexo, edad, peso, altura, actividad, objetivo } = req.body;

    try {
        const response = await axios.post('http://localhost:4000/api/calorias/calcular', {
            sexo, edad, peso, altura, actividad, objetivo
        });
        const resultado = response.data.resultado;
        res.render('resultado', { resultado });
    } catch (error) {
        res.status(500).send('Hubo un error al calcular las necesidades calóricas.');
    }
});

app.post('/calcular-macronutrientes', async (req, res) => {
    const { calorias, distribucion, proteinas, carbohidratos, grasas } = req.body;

    try {
        const response = await axios.post('http://localhost:4000/api/macronutrientes/calcular', {
            calorias, distribucion, proteinas, carbohidratos, grasas
        });
        const resultado = response.data.resultado;
        res.render('resultado1', { resultado });
    } catch (error) {
        console.error('Error al calcular macronutrientes:', error);
        res.status(500).send('Hubo un error al calcular los macronutrientes.');
    }
});

app.post('/planificar', async (req, res) => {
    const { caloriasTotales, proteinasTotales, carbohidratosTotales, grasasTotales, comidas } = req.body;

    try {
        const response = await axios.post('http://localhost:4000/api/planificador/generar', {
            caloriasTotales, proteinasTotales, carbohidratosTotales, grasasTotales, comidas
        });
        const planDeComidas = response.data.planDeComidas;
        res.render('resultado2', { planDeComidas });
    } catch (error) {
        console.error('Error al generar el plan de comidas:', error);
        res.status(500).send('Hubo un error al generar el plan de comidas.');
    }
});

app.use('/api/usuarios', userRouter);

// Servir archivos estáticos (JS, CSS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Puerto del servidor frontend
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Frontend corriendo en http://localhost:${PORT}`);
});
