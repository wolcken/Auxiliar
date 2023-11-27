import React from 'react';
import Button from 'react-bootstrap/Button';
import ListReportInventory from '../utils/ListReportInventory';
import { StatePDf } from '../tools/StatePDF';
import ListInventory from '../utils/ListInventory';
import { InventoryPDF } from '../tools/InventoryPDF';

const Reports = () => {

  const reportInventory = ListReportInventory();
  const assetState = [];

  const inventories = ListInventory();
  const assetInventory = [];

  reportInventory.forEach((inventories) => {
    inventories.forEach((inventory) => {
      assetState.push([inventory?.Categoria, inventory?.SubCategory, inventory?.Codigo, inventory?.Details, inventory?.Estado]);
    })
  });

  inventories.forEach((invent, index) => {
    assetInventory.push([index, invent?.Category, invent?.SubCategory, invent?.Units]);
  })

  const handleStatePDF = () => {
    StatePDf(assetState);
  }

  const handleInventoryPDF = () => {
    InventoryPDF(assetInventory);
  }

  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary" onClick={handleStatePDF}>PDF Estado de Activos</Button>{' '}
      <Button variant="success" onClick={handleInventoryPDF}>PDF Inventario</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>
    </>
  )
}

export default Reports