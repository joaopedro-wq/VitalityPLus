const express = require('express');
const router = express.Router();

// Rota de teste
router.get('/', (req, res) => {
  res.json({ message: 'A API está funcionando corretamente!' });
});

module.exports = router;
