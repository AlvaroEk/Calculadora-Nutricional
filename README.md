CalculadoraNutricionalApi/
├── node_modules/ (carpeta con las dependencias instaladas)
├── src/
│   ├── conexion/
│   │   └── db.js
│   ├── controllers/
│   │   ├── calculatorController.js
│   │   ├── comidasController.js
│   │   ├── macronutrientesController.js
│   │   ├── planificadorController.js
│   │   └── UsuarioController.js
│   ├── models/
│   │   ├── calculatorModel.js
│   │   ├── comidaModel.js
│   │   ├── macronutrientesModel.js
│   │   ├── PlanComidasModel.js
│   │   └── UsuarioModel.js
│   ├── routes/
│   │   ├── comidaRoutes.js
│   │   ├── index.js
│   │   ├── macronutrientesRoutes.js
│   │   ├── planificadorRoutes.js
│   │   └── userRoute.js
│   ├── services/
│   │   ├── calculatorService.js
│   │   ├── comidaService.js
│   │   ├── macronutrientesService.js
│   │   ├── planificadorService.js
│   │   └── UsuarioService.js
├── app.js
├── .env
├── package.json
├── package-lock.json

Dependencias:
bcrypt: ^5.1.1

Para encriptar contraseñas y manejar la seguridad.
cors: ^2.8.5

Middleware para habilitar solicitudes HTTP desde diferentes dominios (CORS).
dotenv: ^16.4.7

Para manejar variables de entorno desde un archivo .env.
express: ^4.21.2

Framework para construir aplicaciones web en Node.js.
express-session: ^1.18.1

Middleware para manejar sesiones en Express.
jsonwebtoken: ^9.0.2

Para crear y verificar tokens JWT.
mysql2: ^3.12.0

Cliente MySQL para Node.js.
