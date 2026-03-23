import React from 'react';
import './Novelties.css';
// Импортируй свои картинки товаров (положи их в src/assets/products/)
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';

const Novelties = ({ title }) => {
  // Массив с данными продуктов
  const products = [
    { id: 1, name: 'Продукт один', image: product1 },
    { id: 2, name: 'Продукт два', image: product2 },
    { id: 3, name: 'Продукт три', image: product3 }
  ];
  
  return (
    <section className="section novelties">
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

export default Novelties;