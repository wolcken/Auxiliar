import React from 'react';
import Button from 'react-bootstrap/Button';
import ListReportInventory from '../utils/ListReportInventory';

const Reports = () => {

  const reportInventory = ListReportInventory();

  const handleReportInventory = () => {
    reportInventory.forEach((inventories) => {
      inventories.forEach((inventory) => {
        console.log(inventory);
      })
    })
  }

  return (
    <>
      <Button variant="primary" onClick={handleReportInventory}>Inventario</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>
    </>
  )
}

export default Reports