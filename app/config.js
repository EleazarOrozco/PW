const dotenv = require('dotenv');
dotenv.config();

// Configuración de variables de entorno
module.exports = {
    // Entorno de la aplicación
    environment: process.env.NODE_ENV || 'development',
    // Host de la aplicación
    host: process.env.HOST || '127.0.0.1',
    // Puerto de la aplicación
    port: process.env.PORT || 3000,
    // Usuario de la base de datos
    dbUser: process.env.USER || 'root',
    // Contraseña de la base de datos
    dbPassword: process.env.PASSWORD || '123456'
};
