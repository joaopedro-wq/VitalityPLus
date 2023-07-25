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

  const [errorMessage, setErrorMessage] = useState('');
  const [atividade, setAtividade] = useState ('');
  const [sexo, setSexo] = useState ('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nome && email && senha && idade && altura && peso && sexo) {
      console.log('Dados do usuário:');
      console.log(`Nome: ${nome}`);
      console.log(`Email: ${email}`);
      console.log(`Senha: ${senha}`);
      console.log(`Idade: ${idade}`);
      console.log(`Altura: ${altura}`);
      console.log(`Peso: ${peso}`);
      console.log(`Atividade física: ${atividade}`);
      console.log (`Sexo: ${sexo}` );
      // Salvar os dados do usuário em algum local (ex: estado global ou serviço de armazenamento)
      const userData = {
        nome,
        email,
        senha,
        idade,
        altura,
        peso,
        atividade,
        sexo,
        
      };

      // Redirecionar para a página de exibição de dados de IMC e cálculo basal
      navigate(`/exibir-dados?nome=${nome}&email=${email}&idade=${idade}&altura=${altura}&peso=${peso}&atividade=${atividade}&sexo=${sexo}`);

    } else {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
    }
  };


  return (
    <div className="container" style={{ marginBottom: '50px' }}>
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
        <label htmlFor="atividade">Categoria de Atividade Física:</label>
        <select
          id="atividade"
          name="atividade"
          value={atividade}
          onChange={(event) => setAtividade(event.target.value)}
        >
          <option value="sedentario">Sedentário</option>
          <option value="pouco-ativo">Pouco Ativo</option>
          <option value="moderadamente-ativo">Moderadamente Ativo</option>
          <option value="muito-ativo">Muito Ativo</option>
          <option value="extremamente-ativo">Extremamente Ativo</option>
        </select>
        <label className="form-label">
  Sexo:
  <select
    value={sexo}
    onChange={(event) => setSexo(event.target.value)}
    required
    className="form-input"
  >
    <option value="">Selecione</option>
    <option value="masculino">Masculino</option>
    <option value="feminino">Feminino</option>
  </select>
</label>

        
        <button type="submit" className="submit-button">Cadastrar</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Cadastro;
