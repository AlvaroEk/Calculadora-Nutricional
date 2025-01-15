const express = require('express');
const path = require('path');
const axios = require('axios');  // Para hacer solicitudes a la API REST
const app = express();

// Middleware para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el motor de vistas y la carpeta de vistas
app.set('views', path.join(__dirname, 'src', 'views')); // Apunta a src/views
app.set('view engine', 'pug');


// Ruta para la página principal
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para manejar el formulario de cálculo de calorías
app.post('/calcular', async (req, res) => {
    const { sexo, edad, peso, altura, actividad, objetivo } = req.body;

    try {
        // Enviar los datos a la API REST para realizar el cálculo
        const response = await axios.post('http://localhost:4000/api/calorias/calcular', {
            sexo,
            edad,
            peso,
            altura,
            actividad,
            objetivo
        });

        // Recibir el resultado de la API y renderizar la vista con el resultado
        const resultado = response.data.resultado;
        res.render('resultado', { resultado });
    } catch (error) {
        res.status(500).send('Hubo un error al calcular las necesidades calóricas.');
    }
});

// Ruta para manejar el cálculo de macronutrientes
app.post('/calcular-macronutrientes', async (req, res) => {
    const { calorias, distribucion, proteinas, carbohidratos, grasas } = req.body;

    try {
        // Enviar los datos a la API REST para calcular los macronutrientes
        const response = await axios.post('http://localhost:4000/api/macronutrientes/calcular', {
            calorias,
            distribucion,
            proteinas,
            carbohidratos,
            grasas
        });

        // Recibir el resultado de la API y renderizar la vista con el resultado
        const resultado = response.data.resultado;
        res.render('resultado1', { resultado });
    } catch (error) {
        console.error('Error al calcular macronutrientes:', error);
        res.status(500).send('Hubo un error al calcular los macronutrientes.');
    }
});

// Servir archivos estáticos (JS, CSS, imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Puerto del servidor frontend
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Frontend corriendo en http://localhost:${PORT}`);
});
