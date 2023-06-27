import React from 'react';
import '../css/Cliente.css';

function Cliente() {
  return (
    <div className="cliente-container" style={{ marginBottom: '50px' }}>
      <h2 className="titulo">Área do Cliente</h2>
      <p className="descricao">
        Bem-vindo à sua área exclusiva, onde você pode acessar informações personalizadas sobre sua conta e interagir
        com nossos serviços.
      </p>
      <div className="botoes-container">
        <button className="botao">Meus Pedidos</button>
        <button className="botao">Perfil</button>
        <button className="botao">Configurações</button>
      </div>
    </div>
  );
}

export default Cliente;
