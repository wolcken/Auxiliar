import React, { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import ListReportInventory from '../utils/ListReportInventory';
import ListInventory from '../utils/ListInventory';
import Loading from '../assets/images/loading-load.gif';
import apiObject from '../api/DBfirestore';
import { StatePDf } from '../tools/StatePDF';
import { InventoryPDF } from '../tools/InventoryPDF';
import { AssetsPDF } from '../tools/AssetsPDF';
import { DepreciationPDF } from '../tools/DepreciationPDF';
import ModalDepreciation from '../components/ModalDepreciation';
import iconPDF from '../assets/icons/archivo-pdf.svg';
import information from '../assets/icons/informacion.svg';
import '../styles/Reports.css';

const Reports = () => {

  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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
  const depreciationMuebles = [];

  const Equipos = apiObject.useAssets('Equipos', 'Equipos de Computacion');
  const assetEquipos = [];
  const depreciationEquipos = [];

  const Vehiculos = apiObject.useAssets('Vehiculos', 'Vehiculos Automotores');
  const assetVehiculos = [];
  const depreciationVehiculos = [];

  Muebles.forEach((mueble, index) => {
    assetMuebles.push([index, mueble.Codigo, mueble.Details, mueble.Valor_Depreciado, mueble.Estado]);
    depreciationMuebles.push([index, mueble.Codigo, mueble.SubCategory, mueble.Fecha_Inicial, mueble.UFV_Inicial, mueble.Valor_Inicial, mueble.Fecha_Final, mueble.UFV_Final, mueble.Valor_Depreciado]);
  });

  Equipos.forEach((equipo, index) => {
    assetEquipos.push([index, equipo.Codigo, equipo.Details, equipo.Valor_Depreciado, equipo.Estado]);
    depreciationEquipos.push([index, equipo.Codigo, equipo.SubCategory, equipo.Fecha_Inicial, equipo.UFV_Inicial, equipo.Valor_Inicial, equipo.Fecha_Final, equipo.UFV_Final, equipo.Valor_Depreciado]);
  });

  Vehiculos.forEach((vehiculo, index) => {
    assetVehiculos.push([index, vehiculo.Codigo, vehiculo.Details, vehiculo.Valor_Depreciado, vehiculo.Estado]);
    depreciationVehiculos.push([index, vehiculo.Codigo, vehiculo.SubCategory, vehiculo.Fecha_Inicial, vehiculo.UFV_Inicial, vehiculo.Valor_Inicial, vehiculo.Fecha_Final, vehiculo.UFV_Final, vehiculo.Valor_Depreciado]);
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

  const handleMueblesDepreciacionPDF = () => {
    DepreciationPDF(depreciationMuebles, 'Equipos de Computacion');
  }

  const handleEquiposDepreciacionPDF = () => {
    DepreciationPDF(depreciationEquipos, 'Muebles y Enseres de Oficina');
  }

  const handleVehiculosDepreciacionPDF = () => {
    DepreciationPDF(depreciationVehiculos, 'Vehiculos Automotores');
  }

  setTimeout(function () {
    setShow(true);
  }, 2000);

  return (
    <>
      <h2>Generador de Reportes</h2>
      {!show ?
        <div style={{ marginTop: 50 }}>
          <Spinner animation="border" variant="primary" />
        </div>
        :
        <div>
          <h3 className='subtitle_report'>Activos</h3>
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
        </div>
      }

      {!show ?
        <div style={{ marginTop: 50 }}>
          <Spinner animation="border" variant="danger" />
        </div>
        :
        <div>
          <h3 className='subtitle_report'>Depreciacion</h3>
          <div>
            <Button
              variant="danger"
              className='btn_report'
              onClick={handleOpen}
            >
              <img src={information} alt="information" className='icon_btn_report' />
              <h5 className='text_btn_report'>Depreciar</h5>
            </Button>
            <Button
              variant="warning"
              className='btn_report'
              onClick={handleMueblesDepreciacionPDF}
            >
              <img src={iconPDF} alt="iconPDF_Muebles" className='icon_btn_report' />
              <h5 className='text_btn_report'>Muebles</h5>
            </Button>
            <Button
              variant="success"
              className='btn_report'
              onClick={handleEquiposDepreciacionPDF}
            >
              <img src={iconPDF} alt="iconPDF_Equipos" className='icon_btn_report' />
              <h5 className='text_btn_report'>Equipos</h5>
            </Button>
            <Button
              variant="primary"
              className='btn_report'
              onClick={handleVehiculosDepreciacionPDF}
            >
              <img src={iconPDF} alt="iconPDF_Vehiculos" className='icon_btn_report' />
              <h5 className='text_btn_report'>Vehiculos</h5>
            </Button>
          </div>
          <ModalDepreciation show={open} handleClose={handleClose} assets={reportInventory} />
        </div>
      }

      <img src={Loading} alt="loading" />
    </>
  )
}

export default Reports