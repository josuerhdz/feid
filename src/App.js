import React from 'react';
import './App.css';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="landing">
      <header>
        <nav>
        <div className="header">
          <img
            src="/st_small_507x507-pad_600x600_f8f8f8-removebg-preview.png" /* Ruta relativa a la imagen del logo en la carpeta public */
            alt="Logo de la empresa"
            className="logo-image"
          />
        </div>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Albums</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <h1 className="centered-title">FERXXO</h1>
      <div className="image-container">
      <img
      src="/98f78c1e278c10d78465c0895e06dc0f.jpg"
      alt="Imagen de ejemplo"
      className="rounded-image"
    />
    <section className="hero">
        <div className="hero-content">
          <a href="#" className="cta-button">!HEY MOR!</a>
        </div>
      </section>
    </div>
      

      <section className="features">
        <div className="feature">
          <h2>PORFA</h2>
          <p>Esta es una de las canciones más conocidas de Feid, en colaboración con Justin Quiles. Fue lanzada en 2019 y ha sido un éxito en el género de reguetón.</p>
        </div>
        <div className="feature">
          <h2>Fumeteo</h2>
          <p>Otra canción destacada de Feid, lanzada en 2020, que combina elementos de reguetón y trap. Esta canción ha sido muy popular en plataformas de streaming.</p>
        </div>
        <div className="feature">
          <h2>Perfecto para Mí</h2>
          <p>Una canción romántica de Feid que se lanzó en 2017. Es una de las canciones que ayudó a establecerlo como un destacado artista en el género del reguetón.</p>
        </div>
      </section>

      <section className="social-icons">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaInstagram /></a>
      </section>
    </div>
  );
}

export default App;
