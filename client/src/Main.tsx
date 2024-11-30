import React from 'react';
import Header from './components/Header';
import PersonModal from "./components/PersonModal";
import './Main.css'
import Shutter from './components/Shutter';


const Main = () => {
    const subdivisions = ["Подразделение 1", "Подразделение 2", "Подразделение 3"];
    return (
        <div className='main-container'>
            <Header/>

            <div className='main-content'>
                 <PersonModal/>
            <Shutter/>
           </div>

            

        </div>
    );
};

export default Main;