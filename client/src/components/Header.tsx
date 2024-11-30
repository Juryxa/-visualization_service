import React from 'react';
import './Header.css';


import logo from '../images/icons/image.png';
import iconSearch from '../images/icons/Vector.png';
import iconMore from '../images/icons/Vector7.png'

import iconClose from '../images/icons/iconClose.png'; // Добавьте иконку крестика
import Shutter from './Shutter';


interface HeaderProps {
  onToggleShutter: () => void;  // Тип пропса, который будет передавать функцию
}


const Header: React.FC<HeaderProps> = ({ onToggleShutter }) => {

 
  



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

          {/* Кнопка для открытия шторки */}
          <button className="header__icon"  onClick={onToggleShutter}>
                <img src={iconMore} alt="шторка" className="search-img" />
            </button>

           
            {/* <div className={`shutter-content-header ${isOpen ? 'visible' : 'hidden'}`}>
               <div></div>
                <Shutter/>

              
            </div>
          */}
            
          

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
