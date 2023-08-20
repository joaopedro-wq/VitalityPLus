import React from 'react';
import '../css/HomePage.css'
import '../css/Contact.css'
import { RiHeart2Line,  RiPhoneLine,  } from 'react-icons/ri';

import SObreImage from '../images/OficialLogo1.png'
import saudavel from '../images/saudavel.jpg';
import image2 from '../images/image2.jpg';
import image1 from '../images/image1.jpg';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Link } from 'react-router-dom';


function HomePage() {

  const images = [
    {
      original: saudavel,
      thumbnail: saudavel,
      
      originalAlt: 'Imagem 1',
    },
  ];
  return (
    <div style={{ marginBottom: '45px' }}>
    
    <section id="banner" className="banner section">
        <h1>Bem-vindo à plataforma de saúde e bem-estar!</h1>
        <p>Aqui você encontra tudo o que precisa para cuidar da sua saúde de forma personalizada.</p>
        <  ImageGallery items={images} showThumbnails={false} showBullets />
        <a href="/about" className="cta-button">
          Comece Agora
        </a>
      </section>

      <section id="services" className="services">
      <h2><RiHeart2Line /> Serviços</h2>
        <p>Explore uma variedade de serviços personalizados para alcançar seus objetivos de saúde.</p>
        <Link to="/servicespage" className="services-button">Veja nossos serviços</Link>
      </section>

      <section id="banner" className="banner section ">
      <h2>Sobre Nós</h2>

        <p>Descubra como nossa plataforma está transformando vidas e promovendo o bem-estar de milhares de pessoas.</p>
       <img src={SObreImage} alt="Banner" className="banner-image" />
        
      </section>



      <section id="contact" className="contact" >
      <h2><RiPhoneLine /> Contato</h2>

        <p>Estamos aqui para responder suas perguntas e fornecer o suporte necessário. Fale conosco agora mesmo!</p>
        
        <Link to="/Contato" className="cta-button">Contato</Link>
      </section>
    </div>
  );
}

export default HomePage;




