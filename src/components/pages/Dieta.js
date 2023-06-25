import React, { useState, useEffect } from 'react';

const Dieta = () => {
  const [planoRefeicoes, setPlanoRefeicoes] = useState([]);
  const [informacoesNutricionais, setInformacoesNutricionais] = useState({});
  const [alimentosRegistrados, setAlimentosRegistrados] = useState([]);

  // Simulação de chamadas assíncronas para obter os dados da dieta do usuário
  useEffect(() => {
    // Obter o plano de refeições do usuário
    const fetchPlanoRefeicoes = async () => {
      // Simulação de chamada assíncrona para obter o plano de refeições
      const response = await fetch('/api/plano-refeicoes');
      const data = await response.json();
      setPlanoRefeicoes(data);
    };

    // Obter as informações nutricionais do usuário
    const fetchInformacoesNutricionais = async () => {
      // Simulação de chamada assíncrona para obter as informações nutricionais
      const response = await fetch('/api/informacoes-nutricionais');
      const data = await response.json();
      setInformacoesNutricionais(data);
    };

    // Obter os alimentos registrados pelo usuário
    const fetchAlimentosRegistrados = async () => {
      // Simulação de chamada assíncrona para obter os alimentos registrados
      const response = await fetch('/api/alimentos-registrados');
      const data = await response.json();
      setAlimentosRegistrados(data);
    };

    // Chamadas assíncronas para obter os dados da dieta
    fetchPlanoRefeicoes();
    fetchInformacoesNutricionais();
    fetchAlimentosRegistrados();
  }, []);

  return (
    <div>
      <h1>Minha Dieta</h1>

      <h2>Plano de Refeições</h2>
      <ul>
        {planoRefeicoes.map((refeicao) => (
          <li key={refeicao.id}>{refeicao.nome}</li>
        ))}
      </ul>

      <h2>Informações Nutricionais</h2>
      <p>
        Calorias diárias: {informacoesNutricionais.calorias} kcal
      </p>
      <p>
        Proteínas diárias: {informacoesNutricionais.proteinas} g
      </p>
      <p>
        Carboidratos diários: {informacoesNutricionais.carboidratos} g
      </p>
      <p>
        Gorduras diárias: {informacoesNutricionais.gorduras} g
      </p>

      <h2>Alimentos Registrados</h2>
      <ul>
        {alimentosRegistrados.map((alimento) => (
          <li key={alimento.id}>{alimento.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dieta;
