import React from 'react';
import './Header.css'; 
import { Link } from 'react-router-dom';

import logo from '../images/icons/image.png'
import iconScerch from '../images/icons/Vector.png'
import icon2 from '../images/icons/Vector7.png'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
      <Link to="/" className="header__logo-link">
        <img src={logo} alt="МТС ЛИНК" className="header__logo-img" />
        </Link>
      </div>
      <div className="header__search">
        <input
          type="text"
          placeholder="Поиск..."
          className="header__search-input"
        />
        <div className="header__search-icons">
          <button className="header__icon">
          <img src={iconScerch} alt="лупа" className="search-img" />
          </button>
          <button className="header__icon">
          <img src={icon2} alt="шторка" className="search-img"/>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
