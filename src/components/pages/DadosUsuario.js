import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/DadosUsuario.css';

const DadosUsuario = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Recuperar os dados da URL
  const nome = params.get('nome');
  const email = params.get('email');
  const idade = parseInt(params.get('idade'));
  const altura = parseInt(params.get('altura'));
  const peso = parseInt(params.get('peso'));
  const atividade = params.get('atividade'); // Nível de atividade física
  const sexo = params.get('sexo');
  const [imc, setIMC] = useState(0);
  const [mb, setMB] = useState(0);
  const [imcCategoria, setImcCategoria] = useState('');

  // Mapear valores e categorias do IMC
  const imcCategorias = [
    { categoria: 'Abaixo do Peso', limite: 18.5 },
    { categoria: 'Peso Normal', limite: 25 },
    { categoria: 'Sobrepeso', limite: 30 },
    { categoria: 'Obesidade Grau I', limite: 35 },
    { categoria: 'Obesidade Grau II', limite: 40 },
    { categoria: 'Obesidade Grau III', limite: Infinity },
  ];

  // Mapear valores e fatores de atividade física
  const fatoresAtividade = {
    'sedentario': 1.2,
    'pouco-ativo': 1.375,
    'moderadamente-ativo': 1.55,
    'muito-ativo': 1.725,
    'extremamente-ativo': 1.9,
  };

  // Cálculo do IMC
  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Converter altura para metros
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado);
    definirCategoriaIMC(imcCalculado);
  };

  // Definir a categoria do IMC
  const definirCategoriaIMC = (imc) => {
    const categoria = imcCategorias.find((item) => imc < item.limite);
    if (categoria) {
      setImcCategoria(categoria.categoria);
    }
  };

  // Cálculo do MB com base no nível de atividade física
  const calcularMB = () => {
    let mbCalculado = 0;

    // Obter o fator de atividade com base no nível selecionado
    const fatorAtividade = fatoresAtividade[atividade] || 1.2;

    // Calcular o metabolismo basal com base na fórmula de Harris-Benedict
    if (sexo === 'masculino') {
      mbCalculado = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * idade;
    } else if (sexo === 'feminino') {
      mbCalculado = 447.593 + 9.247 * peso + 3.098 * altura - 4.330 * idade;
    }

    //mbCalculado *= fatorAtividade;

    setMB(mbCalculado);
  };

  return (
    <div className="dados-usuario" style={{ marginBottom: '50px' }}>
      <h1 className="titulo">Dados do Usuário</h1>
      <div className="info-container">
        <table className="user-table">
          <tbody>
            <tr>
              <th>Nome:</th>
              <td>{nome}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{email}</td>
            </tr>
            <tr>
              <th>Idade:</th>
              <td>{idade}</td>
            </tr>
            <tr>
              <th>Altura:</th>
              <td>{altura}</td>
            </tr>
            <tr>
              <th>Peso:</th>
              <td>{peso}</td>
            </tr>
            <tr>
              <th>Atividade Física:</th>
              <td>{atividade}</td>
            </tr>
            <tr>
              <th>Sexo:</th>
              <td>{sexo}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="calculos-container">
        <button className="calcular-button" onClick={calcularIMC}>
          Calcular IMC
        </button>
        <p className="resultado">
          <strong>IMC:</strong> {imc.toFixed(2)}
        </p>
        <p>Categoria do IMC: {imcCategoria}</p>
        <button className="calcular-button" onClick={calcularMB}>
          Calcular MB
        </button>
        <p className="resultado">
          <strong>Metabolismo Basal (MB):</strong> {mb.toFixed(2)} calorias
        </p>
      </div>
    </div>
  );
};

export default DadosUsuario;
