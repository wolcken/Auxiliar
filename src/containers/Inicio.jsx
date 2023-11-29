import React, { useContext } from 'react';
import logo from '../assets/images/Cecasem30.png';
import { AuthContext } from '../context/AuthProvider';
// import ListReportInventory from '../utils/ListReportInventory';

const Inicio = () => {

  const { user } = useContext(AuthContext);

  // const assetsTotal = ListReportInventory();

  // assetsTotal.forEach((assets) => {
  //   assets.forEach((asset) => {
  //     console.log(asset.id);
  //   });
  // });
  //

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