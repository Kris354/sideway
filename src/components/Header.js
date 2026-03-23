import React from 'react';
import './Header.css';
import searchIcon from '../assets/search.png';
import cartIcon from '../assets/cart.png';
import likeIcon from '../assets/like.png';
import userIcon from '../assets/user.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="logo">SIDEWAY</span>
      </div>
      <div className="header-right">
        <img src={searchIcon} alt="search" />
        <img src={cartIcon} alt="cart" />
        <img src={likeIcon} alt="favorites" />
        <img src={userIcon} alt="profile" />
      </div>
    </header>
  );
};

export default Header;