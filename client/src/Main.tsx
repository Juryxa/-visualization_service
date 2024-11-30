import React, { useState } from 'react';
import Header from './components/Header';
import './Main.css'
import Shutter from './components/Shutter';


const Main = () => {
    // Состояние для управления видимостью шторки
    const [isShutterVisible, setShutterVisible] = useState(false);

    // Функция для переключения видимости шторки
    const toggleShutter = () => {
        setShutterVisible(prev => !prev);
    };
    return (
        <div className='main-container'>
            <Header onToggleShutter={toggleShutter}/>
            
            {isShutterVisible && <Shutter />}
           
        </div>
    );
};

export default Main;