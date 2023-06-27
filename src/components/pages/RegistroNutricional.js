import React, { useState } from 'react';
import '../css/RegistroNutricional.css';
import axios from 'axios';

function RegistroNutricional() {
  const [data, setData] = useState('');
  const [refeicao, setRefeicao] = useState('');
  const [alimentos, setAlimentos] = useState([]);
  const [informacoesNutricionais, setInformacoesNutricionais] = useState(null);

  const [registroDiario, setRegistroDiario] = useState([]);

  const handleAdicionarAlimento = () => {
    const novoAlimento = {
      nome: '',
      quantidade: 0,
      calorias: 0,
      proteinas: 0,
      carboidratos: 0,
      gorduras: 0
    };

    setAlimentos([...alimentos, novoAlimento]);
  };

  const handleAlimentoChange = async (index, field, value) => {
    const novosAlimentos = [...alimentos];
    novosAlimentos[index][field] = value;
    setAlimentos(novosAlimentos);

    if (field === 'nome') {
      await obterInformacoesNutricionais(value, index);
    } else if (field === 'quantidade') {
      const calorias = alimentos[index].calorias * value;
      const carboidratos = alimentos[index].carboidratos * value;
      const proteinas = alimentos[index].proteinas * value;
      const gorduras = alimentos[index].gorduras * value;

      const novosAlimentos = [...alimentos];
      novosAlimentos[index] = {
        ...novosAlimentos[index],
        calorias,
        carboidratos,
        proteinas,
        gorduras,
      };

      setAlimentos(novosAlimentos);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const registro = {
      data,
      refeicao,
      alimentos: [...alimentos],
    };

    setRegistroDiario([...registroDiario, registro]);

    setData('');
    setRefeicao('');
    setAlimentos([]);
  };

  const handleReset = () => {
    setRegistroDiario([]);
  };
  
  const obterInformacoesNutricionais = async (alimento, index) => {
    try {
      const response = await axios.get('https://api.nal.usda.gov/fdc/v1/foods/search', {
        params: {
          query: alimento,
          api_key: 'ZJyGJgT85ZT13ebeaHwrWnDJ6U4IcfhQyIbiI2tf',
        },
      });

      if (response.data.foods.length > 0) {
        const primeiroAlimento = response.data.foods[0];
        const novosAlimentos = [...alimentos];
        novosAlimentos[index] = {
          ...novosAlimentos[index],
          calorias: primeiroAlimento.foodNutrients.find(nutriente => nutriente.nutrientName === 'Energy').value,
          carboidratos: primeiroAlimento.foodNutrients.find(nutriente => nutriente.nutrientName === 'Carbohydrate, by difference').value,
          proteinas: primeiroAlimento.foodNutrients.find(nutriente => nutriente.nutrientName === 'Protein').value,
          gorduras: primeiroAlimento.foodNutrients.find(nutriente => nutriente.nutrientName === 'Total lipid (fat)').value,
        };

        setAlimentos(novosAlimentos);
        setInformacoesNutricionais({
          calorias: novosAlimentos[index].calorias,
          carboidratos: novosAlimentos[index].carboidratos,
          proteinas: novosAlimentos[index].proteinas,
          gorduras: novosAlimentos[index].gorduras,
        });
      } else {
        console.log('Alimento não encontrado');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="registro-nutricional-container" style={{ marginBottom: '50px' }}>
      <h2>Registro Nutricional</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Data:</label>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Refeição:</label>
          <input type="text" value={refeicao} onChange={(e) => setRefeicao(e.target.value)} />
        </div>
        {alimentos.map((alimento, index) => (
          <div className="alimento-container" key={index}>
            <label>Alimento:</label>
            <input
              type="text"
              value={alimento.nome}
              onChange={(e) => handleAlimentoChange(index, 'nome', e.target.value)}
            />
            <label>Quantidade:</label>
            <input
              type="number"
              value={alimento.quantidade}
              onChange={(e) => handleAlimentoChange(index, 'quantidade', e.target.value)}
            />
            {informacoesNutricionais && (
              <div className="informacoes-container">
                <span>Calorias: {informacoesNutricionais.calorias}kcal</span>
                <span>Proteínas: {informacoesNutricionais.proteinas}g</span>
                <span>Carboidratos: {informacoesNutricionais.carboidratos}g</span>
                <span>Gorduras: {informacoesNutricionais.gorduras}g</span>
              </div>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAdicionarAlimento}>
          Adicionar Alimento
        </button>
        <button type="submit">Salvar</button>
        <button type="button" onClick={handleReset}>
          Reiniciar Registro Diário
        </button>
      </form>

      <h3>Registro Diário</h3>
      {registroDiario.length > 0 ? (
        <ul className="registro-diario-list">
          {registroDiario.map((registro, index) => (
            <li key={index}>
              <h4>Refeição: {registro.refeicao}</h4>
              <p>Data: {registro.data}</p>
              <ul className="alimentos-list">
                {registro.alimentos.map((alimento, index) => (
                  <li key={index}>
                    <span>Alimento: {alimento.nome}</span>
                    <span>Quantidade: {alimento.quantidade}</span>
                    <span>Calorias: {alimento.calorias}</span>
                    <span>Proteínas: {alimento.proteinas}</span>
                    <span>Carboidratos: {alimento.carboidratos}</span>
                    <span>Gorduras: {alimento.gorduras}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum registro encontrado.</p>
      )}
    </div>
  );
}

export default RegistroNutricional;
