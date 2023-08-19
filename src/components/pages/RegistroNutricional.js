import React, { useState, useEffect } from 'react';
import '../css/RegistroNutricional.css';
import Select from 'react-select';
import alimentosData from '../../services/taco1.json'; 
import { format } from 'date-fns';

function RegistroNutricional() {
  const [data, setData] = useState('');
  const [refeicao, setRefeicao] = useState('');
 
  const [informacoesNutricionais, setInformacoesNutricionais] = useState(null);
  const [foodOptions, setFoodOptions] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [registroDiario, setRegistroDiario] = useState([]);

  const [alimentos, setAlimentos] = useState([
    {
      nome: '',
      quantidade: 0,
      calorias: 0,
      proteinas: 0,
      carboidratos: 0,
      gorduras: 0,
      selectedFood: null,
    }
  ]);

  const [totals, setTotals] = useState({
    calorias: 0,
    proteinas: 0,
    carboidratos: 0,
    gorduras: 0,
  });
  
  const calcularTotais = () => {
    const newTotals = {
      calorias: 0,
      proteinas: 0,
      carboidratos: 0,
      gorduras: 0,
    };
  
    registroDiario.forEach(registro => {
      registro.alimentos.forEach(alimento => {
        newTotals.calorias += alimento.calorias;
        newTotals.proteinas += alimento.proteinas;
        newTotals.carboidratos += alimento.carboidratos;
        newTotals.gorduras += alimento.gorduras;
      });
    });
  
    setTotals(newTotals);
  };
    
  
  const handleAdicionarAlimento = () => {
    const novoAlimento = {
      nome: '',
      quantidade: 0,
      calorias: 0,
      proteinas: 0,
      carboidratos: 0,
      gorduras: 0,
      selectedFood: null,
  };
    

    setAlimentos([...alimentos, novoAlimento]);
  };
  const handleAlimentoChange = async (index, field, value) => {
    const novosAlimentos = [...alimentos];
    novosAlimentos[index][field] = value;
  
    // Defina selectedFood para o primeiro alimento, se ainda não estiver definido
    if (!novosAlimentos[index].selectedFood && value) {
      novosAlimentos[index].selectedFood = { value, label: value };
    }
  
    setAlimentos(novosAlimentos); 

    if (field === 'nome' && value) {
      novosAlimentos[index].selectedFood = { value, label: value };
      setSelectedFood({ value, label: value });
      await obterInformacoesNutricionais(value, index);
    } else if (field === 'quantidade') {
      const quantidade = parseFloat(value); 
      const alimentoInfo = alimentosData.find(
        alimento => selectedFood && alimento['Descrição do Alimento'] === selectedFood.value
    );
  
      if (alimentoInfo) {
        const descricao = (alimentoInfo['Descrição do Alimento']);
        const proporcao = quantidade / 100; // Calcula a proporção
        const calorias = parseFloat(alimentoInfo['Energia(kcal)']) * proporcao;
        const carboidratos = parseFloat(alimentoInfo['Carboidrato(g)']) * proporcao;
        const proteinas = parseFloat(alimentoInfo['Proteína(g)']) * proporcao;
        const gorduras = parseFloat(alimentoInfo['Lipídeos(g)']) * proporcao;
        
  
        const novosAlimentos = [...alimentos];
        novosAlimentos[index] = {
          ...novosAlimentos[index],
          descricao,
          quantidade, 
          calorias,
          carboidratos,
          proteinas,
          gorduras,
        };
  
        setAlimentos(novosAlimentos);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const registro = {
      data,
      refeicao,
      alimentos: [...alimentos],
    };
  
    // Atualiza os totais com base nos alimentos da refeição atual
    const newTotals = registro.alimentos.reduce((acc, alimento) => {
      return {
        calorias: acc.calorias + alimento.calorias,
        proteinas: acc.proteinas + alimento.proteinas,
        carboidratos: acc.carboidratos + alimento.carboidratos,
        gorduras: acc.gorduras + alimento.gorduras,
      };
    }, totals);
  
    setTotals(newTotals);
  
    setRegistroDiario([...registroDiario, registro]);
  
    setData('');
    setRefeicao('');
    setAlimentos([]);
  };
  

  const handleReset = () => {
    setTotals({
      calorias: 0,
      proteinas: 0,
      carboidratos: 0,
      gorduras: 0,
    });
  
    setRegistroDiario([]);
  };
  
  
  const obterInformacoesNutricionais = async (alimento, index) => {
    const alimentoInfo = alimentosData.find(item => item['Descrição do Alimento'] === alimento);
  
    if (alimentoInfo) {
      const descricao = (alimentoInfo['Descrição do Alimento']);
      const calorias = parseFloat(alimentoInfo['Energia(kcal)']);
      const carboidratos = parseFloat(alimentoInfo['Carboidrato(g)']);
      const proteinas = parseFloat(alimentoInfo['Proteína(g)']);
      const gorduras = parseFloat(alimentoInfo['Lipídeos(g)']);
  
      const novosAlimentos = [...alimentos];
      novosAlimentos[index] = {
        ...novosAlimentos[index],
        descricao,
        calorias,
        carboidratos,
        proteinas,
        gorduras,
      };
  
      setAlimentos(novosAlimentos);
      setInformacoesNutricionais({
        alimentoIndex: index,
        descricao: alimentoInfo['Descrição do Alimento'],
        calorias: alimentoInfo['Energia(kcal)'],
        carboidratos: alimentoInfo['Carboidrato(g)'],
        proteinas: alimentoInfo['Proteína(g)'],
        gorduras: alimentoInfo['Lipídeos(g)'],
      });
    } else {
      console.log('Alimento não encontrado');
    }
  };
  
  useEffect(() => {
    const options = alimentosData.map(alimento => ({
      value: alimento['Descrição do Alimento'],
      label: alimento['Descrição do Alimento'],
    }));
    setFoodOptions(options);
  }, []);
  


  return (
    <div className="registro-nutricional-container" style={{ marginBottom: '80px' }}>
    <h2>Registro Nutricional Diário</h2>
    <form className="registro-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="data">Data:</label>
        <input type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} />
      </div>
      <div className="input-container">
        <label htmlFor="refeicao">Refeição:</label>
        <input placeholder='Nome da refeição' required type="text" id="refeicao" value={refeicao} onChange={(e) => setRefeicao(e.target.value)} />
      </div>
      {alimentos.map((alimento, index) => (
  <div className="alimento-container" key={index}>
    <label className='labelQTD'>Alimento:</label>
    <Select
      options={foodOptions}
      value={alimento.selectedFood}  
      onChange={value => handleAlimentoChange(index, 'nome', value.value)}  // Altere esta linha
      placeholder="Selecione um alimento..."
    />

    <label className='labelQTD'>Quantidade (g):</label>
    <input
      required
      className='qtdInput'
      type="number"
      value={alimento.quantidade === 0 ? '' : alimento.quantidade}
      onChange={(e) => handleAlimentoChange(index, 'quantidade', e.target.value)}
      placeholder='Quantidade do alimento'  
    />
 
  </div>
))}
  <div className='buttons-container'>

      <button className='adicionar-button'  type="button" onClick={handleAdicionarAlimento}>
        Adicionar Alimento
      </button>
      <button className='reiniciar-button' type="button" onClick={handleReset}>
        Reiniciar Registro Diário
      </button>
      <button className='salvar' type="submit">Salvar</button>
  </div>
    </form>
  
    <div className="registro-diario">
      <h3>Registro Diário</h3>
      {registroDiario.length > 0 ? (
        <ul className="registro-diario-list">
        {registroDiario.map((registro, index) => (
          <li key={index}>
            <h4>Refeição: {registro.refeicao}</h4>
            <p className='dataDiaria'>Data: {format(new Date(registro.data), 'dd/MM/yyyy')}</p>

            <ul className="alimentos-list">
              {registro.alimentos.map((alimento, index) => (
                <li key={index}>
                  <span>Alimento: {alimento.descricao}</span>
                  <span>Quantidade: {alimento.quantidade.toFixed(2)}g</span>
                  <span>Calorias: {alimento.calorias.toFixed(2)} kcal</span>
                  <span>Proteínas: {alimento.proteinas.toFixed(2)}g</span>
                  <span>Carboidratos: {alimento.carboidratos.toFixed(2)}g</span>
                  <span>Gorduras: {alimento.gorduras.toFixed(2)}g</span>
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
    <div className="totals-container">
      <h3>Totais Nutricionais do dia:</h3>
      <p>Calorias Totais: {totals.calorias.toFixed(2)} kcal</p>
      <p>Proteínas Totais: {totals.proteinas.toFixed(2)}g</p>
      <p>Carboidratos Totais: {totals.carboidratos.toFixed(2)}g</p>
      <p>Gorduras Totais: {totals.gorduras.toFixed(2)}g</p>
    </div>


  </div>
  
  );
}

export default RegistroNutricional;