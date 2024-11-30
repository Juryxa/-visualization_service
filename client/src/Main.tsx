import React from 'react';
import Header from './components/Header';
import PersonModal from "./components/PersonModal";
import './Main.css'

const Main = () => {
    return (
        <div className='main-container'>
            <Header/>
            <PersonModal/>
        </div>
    );
};

export default Main;