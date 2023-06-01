const routes = require('./routes');
const config = require('./app/config');
const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());
// Middleware para parsear datos codificados en la URL
app.use(express.urlencoded({ extended: true }));

// Usar las rutas
app.use('/', routes);

// Iniciar el servidor
app.listen(config.port, () => {
    console.log('Servidor escuchando en el puerto', config.port);
});
