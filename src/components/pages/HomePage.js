import React from 'react';
import '../css/HomePage.css'
import BannerImage from '../images/saudavel.jpg'

import SObreImage from '../images/OficialLogo1.png'



import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div style={{ marginBottom: '45px' }}>
    
    <section id="banner" className="banner section">
  <h1>Bem-vindo à plataforma de saúde e bem-estar!</h1>
  <p>Aqui você encontra tudo o que precisa para cuidar da sua saúde de forma personalizada.</p>
  <img src={BannerImage} alt="Banner" className="banner-image" />
  <a href="/about" className="cta-button">Comece Agora</a>
</section>

      <section id="services" className="services">
        <h2>Serviços</h2>
        <p>Explore uma variedade de serviços personalizados para alcançar seus objetivos de saúde.</p>
        <Link to="/services" className="services-button">Veja nossos serviços</Link>
      </section>

      <section id="banner" className="banner section ">
        <h2>Sobre Nós</h2>
        <p>Descubra como nossa plataforma está transformando vidas e promovendo o bem-estar de milhares de pessoas.</p>
       <img src={SObreImage} alt="Banner" className="banner-image" />
        
      </section>



      <section id="contact" className="contact" >
        <h2>Contato</h2>
        <p>Estamos aqui para responder suas perguntas e fornecer o suporte necessário. Fale conosco agora mesmo!</p>
        
        <Link to="/Contato" className="cta-button">Contato</Link>
      </section>
    </div>
  );
}

export default HomePage;




