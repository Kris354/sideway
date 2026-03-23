import React from 'react';
import './Footer.css';
import iconsImg from '../assets/icons.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Левая часть */}
        <div className="footer-left">
          <div className="footer-logo">SIDEWAY</div>
          <img src={iconsImg} alt="icons" className="footer-icons" />
        </div>

        {/* Правая часть */}
        <div className="footer-right">
          {/* Блок Поддержка */}
          <div className="footer-support">
            <h3 className="support-title">Поддержка</h3>
            <p className="support-phone">8 899 999-99-99</p>
            <p className="support-phone">8 899 999-99-99</p>
          </div>

          {/* Блок Соцсети */}
          <div className="footer-social">
            <h3 className="social-title">Мы в соцсетях</h3>
            <div className="social-links">
              <span>Telegram</span>
              <span>ВКонтакте</span>
              <span>Instagram</span>
              <span>Max</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;