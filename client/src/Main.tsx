import React, { useState } from 'react';
import Header from './components/Header';
import PersonModal from "./components/PersonModal";
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
<<<<<<< HEAD
            <Header onToggleShutter={toggleShutter}/>
            
            {isShutterVisible && <Shutter />}
           
=======
            <Header/>

            <div className='main-content'>
                 <PersonModal/>
            <Shutter/>
           </div>

            

>>>>>>> 683deda1d7e7abb4847444bfe53e97701a046a02
        </div>
    );
};

export default Main;