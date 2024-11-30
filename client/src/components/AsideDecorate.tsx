import React from 'react';
import './AsideDecorate.css'
import mts from '../images/icons/mts_aside.png'

const AsideDecorate = () => {
    return (
        <aside className='aside'>
            <img src={mts} className='mts_logo' alt='мтс линк'/>
        </aside>
    );
};

export default AsideDecorate;