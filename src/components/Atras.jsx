import React from 'react'
import { NavLink } from 'react-router-dom';
import atras from '../assets/icons/paso-atras.svg';
import '../styles/Atras.css';

export const Atras = () => {
    return (
        <NavLink to='/'>
            <img src={atras} alt="atras" className='atras-btn' />
        </NavLink>
    )
}
