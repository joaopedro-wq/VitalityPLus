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

  const [imc, setIMC] = useState(0);
  const [mb, setMB] = useState(0);
  const [imcCategoria, setImcCategoria] = useState('');
  // Cálculo do IMC
  const calcularIMC = () => {
    const alturaMetros = altura / 100; // Converter altura para metros
    const imcCalculado = peso / (alturaMetros * alturaMetros);
    setIMC(imcCalculado);
    definirCategoriaIMC(imcCalculado); 
  };
// Definir a categoria do IMC
const definirCategoriaIMC = (imc) => {
  if (imc < 18.5) {
    setImcCategoria('Abaixo do Peso');
  } else if (imc >= 18.5 && imc < 25) {
    setImcCategoria('Peso Normal');
  } else if (imc >= 25 && imc < 30) {
    setImcCategoria('Sobrepeso');
  } else if (imc >= 30 && imc < 35) {
    setImcCategoria('Obesidade Grau I');
  } else if (imc >= 35 && imc < 40) {
    setImcCategoria('Obesidade Grau II');
  } else {
    setImcCategoria('Obesidade Grau III');
  }
};
  // Cálculo do MB com base no nível de atividade física
  const calcularMB = () => {
    let mbCalculado = 0;

    // Calcular fator de atividade com base na categoria selecionada
    let fatorAtividade = 1.2; // Sedentário (padrão)

    if (atividade === 'pouco-ativo') {
      fatorAtividade = 1.375;
    } else if (atividade === 'moderadamente-ativo') {
      fatorAtividade = 1.55;
    } else if (atividade === 'muito-ativo') {
      fatorAtividade = 1.725;
    } else if (atividade === 'extremamente-ativo') {
      fatorAtividade = 1.9;
    }

    // Calcular o metabolismo basal com base no fator de atividade
    mbCalculado = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * idade;
    mbCalculado *= fatorAtividade;

    setMB(mbCalculado);
  };

  return (
    <div className="dados-usuario">
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
