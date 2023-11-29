import React, { useContext } from 'react';
import logo from '../assets/images/Cecasem30.png';
import { AuthContext } from '../context/AuthProvider';

const Inicio = () => {

  const { user } = useContext(AuthContext);

  return (
    <>
      <h2>Inicio</h2>
      <p>{user?.email}</p>
      <img src={logo} alt="logo" style={{
        width: '80%',
        padding: 5
      }} />
    </>
  )
}

export default Inicio