import React from 'react';

function ServicesPage() {
  return (
    <div>
      <h1 className='service-title'>Nossos Serviços</h1>
      <p className='service-description'>Aqui estão alguns dos serviços que oferecemos para ajudar você a alcançar uma dieta saudável e equilibrada:</p>

      <div className="service-card">
        <h2>Planos de Dieta Personalizados</h2>
        <p>Crie um plano de dieta personalizado de acordo com suas necessidades e objetivos individuais. Leve em consideração fatores como idade, peso, altura, restrições alimentares e preferências pessoais.</p>
      </div>

      <div className="service-card">
        <h2>Receitas Saudáveis</h2>
        <p>Explore nossa coleção de receitas saudáveis e balanceadas. Encontre opções nutritivas e saborosas para todas as refeições, com informações nutricionais detalhadas.</p>
      </div>

      <div className="service-card">
        <h2>Listas de Compras</h2>
        <p>Facilitamos suas compras fornecendo listas de compras personalizadas com os ingredientes necessários para suas receitas ou plano de dieta. Economize tempo e evite desperdícios.</p>
      </div>

      <div className="service-card">
        <h2>Rastreamento de Calorias e Nutrientes</h2>
        <p>Acompanhe sua ingestão diária de calorias e nutrientes com nossas ferramentas de rastreamento. Tenha uma visão clara do que você consome e mantenha-se equilibrado.</p>
      </div>

      <div className="service-card">
        <h2>Dicas de Nutrição</h2>
        <p>Encontre dicas valiosas sobre nutrição, esclareça mitos alimentares comuns e aprenda como adotar uma alimentação saudável de maneira sustentável.</p>
      </div>

      <div className="service-card">
        <h2>Comunidade de Apoio</h2>
        <p>Junte-se à nossa comunidade online de pessoas que compartilham o objetivo de uma vida saudável. Compartilhe experiências, receitas e dê apoio uns aos outros.</p>
      </div>

      <div className="service-card">
        <h2>Acompanhamento de Progresso</h2>
        <p>Avalie seu progresso com ferramentas de acompanhamento. Acompanhe seu peso, medidas corporais e conquistas alcançadas ao longo do tempo.</p>
      </div>
    </div>
  );
}

export default ServicesPage;
