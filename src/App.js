
import './components/css/Header.css';
import './components/css/Footer.css';
import './components/css/Contact.css';
import './components/css/About.css';
import './components/css/Banner.css';
import './components/css//Services.css';
import './components/css/Blog.css';

import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Homepage.js';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ServicesPage from './components/pages/ServicesPage';
import BlogPage from './components/pages/BlogPage.js';
import RegistroNutricional from './components/pages/RegistroNutricional';
import testUSDAFoodAPI from './components/pages/TestUSDAFoodAPI';
import Alimento from './components/pages/Alimento';
import SobreNos from './components/pages/SobreNos';
import Cliente from './components/pages/Cliente';
import Cadastro from './components/pages/Cadastro';
import Dieta from './components/pages/Dieta';

function App() {

  useEffect(() => {
    
  }, []);
  return (
    <Router>
      <div>

     
        <header>
        <div className="logo-container">
        <img src={require('./OficialLogo1.png')} alt="Vitality Plus Logo" className="logo" width="180" height="auto" />

        </div>
          <nav>

            <ul>
   
              <li><a href="/home">Home</a></li>
              <li><a href="/Cliente">Clientes</a></li>
              <li><a href="/Alimento">Alimentos</a></li>
              <li><a href="/RegistroNutricional">Registro Nutricional</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/SobreNos">Sobre</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/RegistroNutricional" element={<RegistroNutricional />} />
            <Route path="/Alimento" element={<Alimento />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="/Cliente" element={<Cliente />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/dieta" component={Dieta} />
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
