import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Banner from './Components/Banner';
import Links from './Components/Links';
import Footer from './Components/Rodape';
import About from './Components/About';
import Form from './Components/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Banner />
    <About />
    <Links />
    <Form />
    <Footer />
  </React.StrictMode>
);