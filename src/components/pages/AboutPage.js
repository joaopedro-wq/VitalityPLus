import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/About.css';

const AboutPage = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [registroAlimento, setRegistroAlimento] = useState('');
  const [metas, setMetas] = useState('');
  const [receita, setReceita] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(`Nome: ${nome}, Email: ${email}`);
    
    navigate('/cadastro');
  };

  return (
    <div className="about-page">
      <h1 className="title">Bem-vindo à plataforma de saúde e bem-estar!</h1>
      <p className="description">Aqui você encontra tudo o que precisa para cuidar da sua saúde de forma personalizada.</p>
      <div className="section">
        <p className="section-title">Recursos da plataforma:</p>
        <ul>
          <li>Registro nutricional: {registroAlimento}</li>
          <li>Acompanhamento de metas: {metas}</li>
          <li>Receitas saudáveis: {receita}</li>
          <li>Calendário de Atividades</li>
          <li>Dicas de Saúde Personalizadas</li>
          <li>Comunidade e Fórum</li>
          <li>Acompanhamento de Peso</li>
          <li>Desafios e Metas Coletivas</li>
        </ul>
      </div>
     
      <div className="section">
        <p className="section-title">Registre-se agora:</p>
        <form onSubmit={handleSubmit} className="registration-form">
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            className="input-field"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input-field"
          />
          <button type="submit" className="register-button">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default AboutPage;
