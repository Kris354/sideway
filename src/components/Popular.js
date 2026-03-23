import React from 'react';
import './Popular.css';
import popular1 from '../assets/product4.png';
import popular2 from '../assets/product5.png';
import popular3 from '../assets/product6.png';

const Popular = ({ title }) => {
  const products = [
    { id: 1, name: 'Популярный товар 1', image: popular1 },
    { id: 2, name: 'Популярный товар 2', image: popular2 },
    { id: 3, name: 'Популярный товар 3', image: popular3 }
  ];
  
  return (
    <section className="section popular">
      <div className="section-header">
        <h2>{title}</h2>
        <a href="/catalog" className="section-link">Смотреть &gt;</a>
      </div>
      <div className="cards-grid">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="card-image">
              <img src={product.image} alt={product.name} />
            </div>
            <button className="btn-small">Смотреть</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;