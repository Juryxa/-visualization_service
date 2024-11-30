import React from 'react';
import Header from './components/Header';
import PersonModal from "./components/PersonModal";
import './Main.css'
import AccordionTree from "./components/AccordionTree";
import AsideDecorate from "./components/AsideDecorate";

const Main = () => {
    return (
        <div className='main-container'>
            <Header/>
            <PersonModal/>
            <div className='accordion-aside-container'>
                <AsideDecorate/>
                <AccordionTree/>
            </div>
        </div>
    );
};

export default Main;