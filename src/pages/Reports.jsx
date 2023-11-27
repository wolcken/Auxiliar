import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListReportInventory from '../utils/ListReportInventory';
import { StatePDf } from '../tools/StatePDF';
import ListInventory from '../utils/ListInventory';
import { InventoryPDF } from '../tools/InventoryPDF';
import Loading from '../assets/images/loading-load.gif';
import Spinner from 'react-bootstrap/Spinner';
import '../styles/Reports.css';

//icons
import iconPDF from '../assets/icons/archivo-pdf.svg';
import apiObject from '../api/DBfirestore';
import { AssetsPDF } from '../tools/AssetsPDF';

const Reports = () => {

  const [show, setShow] = useState(false);

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

  const Muebles = apiObject.useAssets('Muebles', 'Muebles y Enseres de Oficina');
  const assetMuebles = [];

  const Equipos = apiObject.useAssets('Equipos', 'Equipos de Computacion');
  const assetEquipos = [];

  const Vehiculos = apiObject.useAssets('Vehiculos', 'Vehiculos Automotores');
  const assetVehiculos = [];

  Muebles.forEach((mueble, index) => {
    assetMuebles.push([index, mueble.Codigo, mueble.Details, mueble.Valor_Depreciado, mueble.Estado])
  });

  Equipos.forEach((equipo, index) => {
    assetEquipos.push([index, equipo.Codigo, equipo.Details, equipo.Valor_Depreciado, equipo.Estado])
  });

  Vehiculos.forEach((vehiculo, index) => {
    assetVehiculos.push([index, vehiculo.Codigo, vehiculo.Details, vehiculo.Valor_Depreciado, vehiculo.Estado])
  });

  const handleStatePDF = () => {
    StatePDf(assetState);
  }

  const handleInventoryPDF = () => {
    InventoryPDF(assetInventory);
  }

  const handleMueblesPDF = () => {
    AssetsPDF(assetMuebles, 'Muebles y Enseres de Oficina');
  }

  const handleEquiposPDF = () => {
    AssetsPDF(assetEquipos, 'Equipos de Computacion');
  }

  const handleVehiculosPDF = () => {
    AssetsPDF(assetVehiculos, 'Vehiculos Automotores');
  }

  setTimeout(function () {
    setShow(true);
  }, 2000);

  return (
    <>
      <h2>Generador de Reportes</h2>
      <h3>Activos</h3>
      {!show ?
        <div style={{ marginTop: 50 }}>
          <Spinner animation="border" variant="primary" />
        </div>
        :
        <div>
          <Button
            variant="secondary"
            className='btn_report'
            onClick={handleStatePDF}
          >
            <img src={iconPDF} alt='iconPDf_State' className='icon_btn_report' />
            <h5 className='text_btn_report'>Estados</h5>
          </Button>
          <Button
            variant="success"
            className='btn_report'
            onClick={handleInventoryPDF}
          >
            <img src={iconPDF} alt="iconPDF_Inventory" className='icon_btn_report' />
            <h5 className='text_btn_report'>Inventario</h5>
          </Button>
          <Button
            variant="warning"
            className='btn_report'
            onClick={handleMueblesPDF}
          >
            <img src={iconPDF} alt="iconPDF_Muebles" className='icon_btn_report' />
            <h5 className='text_btn_report'>Muebles</h5>
          </Button>
          <Button
            variant="danger"
            className='btn_report'
            onClick={handleEquiposPDF}
          >
            <img src={iconPDF} alt="iconPDF_Equipos" className='icon_btn_report' />
            <h5 className='text_btn_report'>Equipos</h5>
          </Button>
          <Button
            variant="primary"
            className='btn_report'
            onClick={handleVehiculosPDF}
          >
            <img src={iconPDF} alt="iconPDF_Vehiculos" className='icon_btn_report' />
            <h5 className='text_btn_report'>Vehiculos</h5>
          </Button>
        </div>
      }
      <img src={Loading} alt="loading" />
    </>
  )
}

export default Reports