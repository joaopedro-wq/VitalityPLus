import React, { useState, useEffect } from 'react';

import './components/css/Header.css';
import './components/css/Footer.css';
import './components/css/Contact.css';
import './components/css/About.css';
import './components/css/Banner.css';
import './components/css//Services.css';
import './components/css/Blog.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';

import ServicesPage from './components/pages/ServicesPage';
import BlogPage from './components/pages/BlogPage.js';
import RegistroNutricional from './components/pages/RegistroNutricional';
import Alimento from './components/pages/Alimento';
import SobreNos from './components/pages/SobreNos';
import Cliente from './components/pages/Cliente';
import Cadastro from './components/pages/Cadastro';
import Dieta from './components/pages/Dieta';
import DadosUsuario from './components/pages/DadosUsuario';


function App() {
 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Router>
      <div>

     
        <header>
        <div className="logo-container">
        <img src={require('./OficialLogo1.png')} alt="Vitality Plus Logo" className="logo" width="150" height="auto" />

        </div>
          <nav>
         
        <ul >
              <li><a href="/">Home</a></li>
              <li><a href="/cadastro">Clientes</a></li>
              <li><a href="/Alimento">Alimentos</a></li>
              <li><a href="/RegistroNutricional">Registro Nutricional</a></li>
              <li><a href="/blogpage">Blog</a></li>
              <li><a href="/sobreNos">Sobre</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
          <Route path="/" element={<HomePage />} />
            
            <Route path="/about" element={<AboutPage />} />
           
            <Route path="/servicespage" element={<ServicesPage />} />
            <Route path="/blogpage" element={<BlogPage />} />
            <Route path="/registroNutricional" element={<RegistroNutricional />} />
            <Route path="/alimento" element={<Alimento />} />
            <Route path="/sobreNos" element={<SobreNos />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/dieta" component={Dieta} />
            <Route path="/exibir-dados" element={<DadosUsuario />} />
          </Routes>
        </main>

        <footer >
          <p className='content'>Todos os direitos reservados &copy; 2023</p>
        </footer>
      </div>
    </Router>
  );
}


export default App;