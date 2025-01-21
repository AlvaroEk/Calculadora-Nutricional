CalculadoraNutricionalFront/
├── public/
│   ├── css/
│   │   ├── styles.css
│   │   └── styles.css.map
│   ├── js/
│   │   └── main.js
├── src/
│   ├── controllers/
│   │   ├── comidaController.js
│   │   ├── formController.js
│   │   ├── macronutrientesController.js
│   │   ├── planificadorController.js
│   │   └── usuarioController.js
│   ├── models/
│   │   ├── comidaModel.js
│   │   ├── formModel.js
│   │   ├── macronutrientesModel.js
│   │   ├── planComidaModels.js
│   │   └── usuarioModel.js
│   ├── routes/
│   │   ├── comidaRoutes.js
│   │   ├── index.js
│   │   ├── planificadorRoutes.js
│   │   ├── routes.js
│   │   └── userRoutes.js
│   ├── sass/
│   │   └── index.sass
│   ├── service/
│   │   ├── apiService.js
│   │   ├── comidaService.js
│   │   ├── macronutrientesService.js
│   │   ├── planificadorService.js
│   │   └── usuarioService.js
│   ├── views/
│   │   ├── index.pug
│   │   ├── login.pug
│   │   ├── navbar.pug
│   │   ├── planificador.pug
│   │   ├── register.pug
│   │   ├── registroComidas.pug
│   │   ├── resultado.pug
│   │   ├── resultado1.pug
│   │   └── resultado2.pug
├── server.js   # Configuración principal del servidor
├── package.json
├── package-lock.json
├── README.md

Dependencias:
axios: ^1.7.9

Cliente HTTP para realizar solicitudes a APIs.
dotenv: ^16.4.7

Para cargar variables de entorno desde un archivo .env.
express: ^4.21.2

Framework para construir aplicaciones web en Node.js.
express-session: ^1.18.1

Middleware para manejar sesiones en Express.
nodemon: ^3.1.9

Herramienta para reiniciar automáticamente el servidor durante el desarrollo.
path: ^0.12.7

Módulo para manipular rutas de archivos y directorios.
pug: ^3.0.3

Motor de plantillas HTML para Node.js.
sass: ^1.83.4

Lenguaje de preprocesador CSS para escribir estilos de manera más eficiente.

