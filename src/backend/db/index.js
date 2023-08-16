const mysql = require('mysql2/promise');

// Configurações da conexão com o banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'vplus',
});

// Exporte o objeto de conexão
module.exports = connection;
