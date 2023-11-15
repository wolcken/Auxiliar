import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../styles/Menu.css';
import documento from '../assets/icons/documento.svg';
import busqueda from '../assets/icons/busqueda.svg';
import editar from '../assets/icons/editar.svg';
import monedas from '../assets/icons/monedas.svg';

const Menu = () => {
  return (
    <>
      <h1>Menu</h1>
      <NavLink to='/reports' className='link-btn'>
        <Button variant="primary" className='btn-btn'>
          <img src={documento} alt="documento" className='img-menu' />
          <h5 className='text-btn'>Reports</h5>
        </Button>
      </NavLink>
      <NavLink to='/registers' className='link-btn'>
        <Button variant="secondary" className='btn-btn'>
          <img src={monedas} alt="monedas" className='img-menu' />
          <h5 className='text-btn'>Registers</h5>
        </Button>
      </NavLink>
      <NavLink to='/search' className='link-btn'>
        <Button variant="info" className='btn-btn'>
          <img src={busqueda} alt="busqueda" className='img-menu' />
          <h5 className='text-btn'>Search</h5>
        </Button>
      </NavLink>
      <NavLink to='/updates' className='link-btn'>
        <Button variant="success" className='btn-btn'>
          <img src={editar} alt="editar" className='img-menu' />
          <h5 className='text-btn'>Updates</h5>
        </Button>
      </NavLink>
    </>
  )
}

export default Menu