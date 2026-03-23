import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Novelties from './components/Novelties';
import Popular from './components/Popular';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Novelties title="Новинки" />  {/* 2 БЛОК - НОВИНКИ */}
      <Popular title="Популярное" />  {/* 3 БЛОК - ПОПУЛЯРНОЕ (ТОЧНО ТАКОЙ ЖЕ) */}
      <About />
      <Footer />
    </div>
  );
}

export default App;