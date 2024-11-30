import React from 'react';
import Header from './components/Header';
import PersonModal from "./components/PersonModal";
import './Main.css'
import AccordionTree from "./components/AccordionTree";
import AsideDecorate from "./components/AsideDecorate";
import Shutter from './components/Shutter';


const Main = () => {
    const subdivisions = ["Подразделение 1", "Подразделение 2", "Подразделение 3"];
    return (
        <div className='main-container'>
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