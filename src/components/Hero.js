import React from 'react';
import './Hero.css';
import snowImg from '../assets/snow.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{backgroundImage: `url(${snowImg})`}}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p>SIDEWAY - все,</p>
          <p>что нужно для катания</p>
        </div>
        <button className="btn-primary">Перейти в каталог</button>
      </div>
    </section>
  );
};

export default Hero;