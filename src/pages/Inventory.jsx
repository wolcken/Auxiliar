import React from 'react'
import ListInventory from '../utils/ListInventory';
import Table from 'react-bootstrap/Table';

const Inventory = () => {

  const inventories = ListInventory();

  return (
    <>
      <h2>Inventario</h2>
      <div style={{ margin: '2%' }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Categoria</th>
              <th>SubCategoria</th>
              <th>Unidades</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((invent, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{invent?.Category}</td>
                <td>{invent?.SubCategory}</td>
                <td>{invent?.Units}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Inventory