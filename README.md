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

Aquí está una guía paso a paso sobre cómo utilizar tu proyecto basada en las instrucciones proporcionadas:

---

### **Cómo utilizar el proyecto:**

1. **Descargar los códigos**:
   - Asegúrate de descargar **ambos códigos**: el de la API y el del frontend (main).

2. **Abrir las carpetas en la terminal**:
   - Abre una terminal en la carpeta principal del **frontend**.
   - Abre otra terminal en la carpeta principal de la **API**.

3. **Instalar las dependencias en ambos proyectos**:
   - Ejecuta el siguiente comando en **ambas terminales** (una para la API y otra para el frontend):
     ```bash
     npm install
     ```
     Esto instalará todas las dependencias necesarias según el archivo `package.json`.

4. **Iniciar primero la API**:
   - En la terminal de la API, ejecuta:
     ```bash
     npm start
     ```
   - Esto iniciará el servidor de la API, que manejará las solicitudes y conectará con la base de datos.

5. **Iniciar el frontend**:
   - Una vez que la API esté funcionando correctamente, ve a la terminal del frontend y ejecuta:
     ```bash
     npm start
     ```
   - Esto levantará el servidor del frontend, permitiéndote interactuar con la interfaz.

6. **Usar el proyecto**:
   - Ahora, puedes abrir el navegador y comenzar a utilizar el proyecto desde la dirección que el frontend proporcione (generalmente algo como `http://localhost:3000` o similar).
---
### **Notas importantes**:
- **Archivos `.env`**:
  - Asegúrate de que tanto la API como el frontend tengan configurados correctamente sus archivos `.env` (si los necesitas).
  - La API probablemente requerirá detalles como las credenciales de la base de datos.
  
- **Verificar el estado de la API**:
  - Antes de iniciar el frontend, verifica que la API esté funcionando correctamente y escuche en el puerto configurado.

- **Puertos**:
  - Asegúrate de que los puertos configurados en la API y el frontend no entren en conflicto.

---
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

