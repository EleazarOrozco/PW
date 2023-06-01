const mysql = require('mysql');
const config = require('../app/config');

// Crear conexión a la base de datos
const connection = mysql.createConnection({
    host: config.host,
    user: config.dbUser,
    password: config.dbPassword,
    database: '' // Aquí el nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Conexión exitosa');
    }
});

module.exports = connection;
