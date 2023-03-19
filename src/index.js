import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './Components/Banner';
import Links from './Components/Links';
import Footer from './Components/Rodape';
import About from './Components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <About />
    <Links />
    <Footer />
  </React.StrictMode>
);