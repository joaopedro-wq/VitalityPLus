const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Importe as rotas
const testRoutes = require('./routes/userRoutes');
const alimentoRoutes = require('./routes/alimentosRoutes');

// Use as rotas
app.use('/api/test', testRoutes); // Use a rota de teste em /api/test
app.use('/api', alimentoRoutes); // Use a rota de alimentos em /api/alimentos

// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
