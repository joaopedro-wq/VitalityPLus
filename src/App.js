import React from 'react';
import './components/css/Header.css';
import './components/css/Footer.css';
import './components/css/Contact.css';
import './components/css/About.css';
import './components/css/Banner.css';
import './components/css//Services.css';
import './components/css/Blog.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/Homepage.js';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ServicesPage from './components/pages/ServicesPage';
import BlogPage from './components/pages/BlogPage.js';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">Alimentos</a></li>
              <li><a href="#">Registro Nutricional</a></li>
              <li><a href="#">Sobre</a></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
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
