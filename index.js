const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar CORS
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la APP
const port = process.env.PORT || 4000;

// importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// Arrancar la APP

app.listen(port, '0.0.0.0', () => {
	console.log(`El servidor está funcionando en el puerto ${port}`);
});
