import React from 'react';
import '../css/HomePage.css'
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div style={{ marginBottom: '50px' }}>
    
    <section id="banner" className="banner section">
  <h1>Bem-vindo à plataforma de saúde e bem-estar!</h1>
  <p>Aqui você encontra tudo o que precisa para cuidar da sua saúde de forma personalizada.</p>
  <a href="/about" className="cta-button">Comece Agora</a>
</section>

      <section id="services" className="services ">
        <h2>Sobre Nós</h2>
        <p>Algumas informações sobre a Vitality PLUS.</p>
        <Link to="/SobreNos" className="services-button">Sobre</Link>
      </section>

      <section id="services" className="services">
        <h2>Serviços</h2>
        <p>Descrição dos serviços que sua plataforma oferece aos usuários.</p>
        <Link to="/services" className="services-button">Veja nossos serviços</Link>
      </section>

      <section id="blog" className="blog">
        <h2>Blog</h2>
        <p>Últimas notícias e artigos relacionados à saúde e bem-estar.</p>
        <Link to="/blog" className="services-button">Veja o Blog</Link>
      </section>

      <section id="contact" className="contact" >
        <h2>Contato</h2>
        <p>Entre em contato conosco para obter mais informações ou tirar suas dúvidas.</p>
        <Link to="/Contato" className="services-button">Contato</Link>
      </section>
    </div>
  );
}

export default HomePage;




