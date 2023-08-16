const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroNutricionalController');

router.post('/adicionar', registroController.adicionarRegistro); 
router.get('/buscar', registroController.buscarRegistros);

module.exports = router;
