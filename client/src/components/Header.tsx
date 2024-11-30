import React from 'react';
import './Header.css';


import logo from '../images/icons/image.png';
import iconSearch from '../images/icons/Vector.png';
import iconMore from '../images/icons/Vector7.png'

const Header: React.FC = () => {



  return (
    <header className="header">
      <div className="header__logo">
          <img src={logo} alt="МТС ЛИНК" className="header__logo-img" />
      </div>
      <div className="header__search">
        <input
          type="text"
          placeholder="Поиск..."
          className="header__search-input"
        />
        <div className="header__search-icons">
          {/* Кнопка для открытия шторки */}
          <button className="header__icon" >
            <img src={iconSearch} alt="лупа" className="search-img" />
          </button>
          {/* Кнопка шторки */}
          <button className="header__icon" >
            <img src={iconMore} alt="шторка" className="search-img" />
          </button>



        </div>
      </div>
    </header>
  );
};

export default Header;
