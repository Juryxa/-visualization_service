import React, { useState } from 'react';
import Header from './components/Header';
import PersonModal from "./components/PersonModal";
import './Main.css'
import AccordionTree from "./components/AccordionTree";
import AsideDecorate from "./components/AsideDecorate";
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
           

            <Header/>

            <div className='main-content'>

            <Shutter/>
           </div>




            <PersonModal/>
            <div className='accordion-aside-container'>
                <AsideDecorate/>
                <AccordionTree/>
            </div>

        </div>
    );
};

export default Main;