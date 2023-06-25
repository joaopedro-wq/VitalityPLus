import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cadastro.css';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [preferencias, setPreferencias] = useState('');
  const [restricoes, setRestricoes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nome && email && senha && idade && altura && peso && preferencias) {
      console.log('Dados do usuário:');
      console.log(`Nome: ${nome}`);
      console.log(`Email: ${email}`);
      console.log(`Senha: ${senha}`);
      console.log(`Idade: ${idade}`);
      console.log(`Altura: ${altura}`);
      console.log(`Peso: ${peso}`);
      console.log(`Preferências alimentares: ${preferencias}`);
      console.log(`Restrições alimentares: ${restricoes}`);

      navigate('/dieta');
    } else {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div className="container">
      <h1 className="title">Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Senha:
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Idade:
          <input
            type="number"
            value={idade}
            onChange={(event) => setIdade(event.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={(event) => setAltura(event.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(event) => setPeso(event.target.value)}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Preferências Alimentares:
          <textarea
            value={preferencias}
            onChange={(event) => setPreferencias(event.target.value)}
            required
            className="form-textarea"
          ></textarea>
        </label>
        <label className="form-label">
          Restrições Alimentares:
          <textarea
            value={restricoes}
            onChange={(event) => setRestricoes(event.target.value)}
            className="form-textarea"
          ></textarea>
        </label>
        <button type="submit" className="submit-button">Cadastrar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Cadastro;
