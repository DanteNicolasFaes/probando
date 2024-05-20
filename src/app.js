const express = require('express');
const app = express();
const path = require('path');
const productRoutes = require('./routes/products');

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Usar las rutas en la aplicación
app.use('/api', productRoutes);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
