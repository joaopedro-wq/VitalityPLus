const express = require('express');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar o uso do CORS
app.use(cors());

// Importe as rotas

const alimentoRoutes = require('./routes/alimentosRoutes');
const registroRoutes = require('./routes/registroRoutes');

app.use(express.json());

// Use as rotas
app.use('/api', alimentoRoutes);
app.use('/registro', registroRoutes); 


// Inicie o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
