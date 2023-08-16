const db = require('../db/index');

exports.adicionarRegistro = async (req, res) => {
  try {
    console.log('Recebendo solicitação para adicionar registro');
    const { data, refeicao, alimentos } = req.body;

    for (const alimento of alimentos) {
      const {
        nome,
        quantidade,
        calorias,
        proteinas,
        carboidratos,
        gorduras,
      } = alimento;

      await db.promise().query(
        'INSERT INTO registros_nutricionais(data, refeicao, alimento, quantidade, calorias, proteinas, carboidratos, gorduras) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [
          data,
          refeicao,
          nome,
          quantidade,
          calorias,
          proteinas,
          carboidratos,
          gorduras,
        ]
      );
    }

    // Envie uma resposta de sucesso
    res.status(201).json({ message: 'Registro nutricional adicionado com sucesso.' });
  } catch (error) {
    // Em caso de erro, envie uma resposta de erro
    console.error('Erro ao adicionar registro nutricional:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao adicionar o registro nutricional.' });
  }
};



exports.buscarRegistros = async (req, res) => {
  try {
    console.log('Recebendo solicitação para buscar registros');

    // Faça uma consulta ao banco de dados para buscar todos os registros
    const [registros] = await db.query('SELECT data, refeicao, alimento FROM registros_nutricionais');

    // Envie os registros como resposta
    res.status(200).json(registros);
  } catch (error) {
    console.error('Erro ao buscar registros:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar os registros nutricionais.' });
  }
};
