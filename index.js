const express = require('express');
const conectarDB = require('./config/db');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la APP
const PORT = process.env.PORT || 4000;

// importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));

// Arrancar la APP

app.listen(PORT, () => {
	console.log(`El servidor está funcionando en el puerto ${PORT}`);
});
