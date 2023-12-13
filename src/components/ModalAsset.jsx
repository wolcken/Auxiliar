import React, { useState } from 'react';
import { Button, Modal, Image } from 'react-bootstrap';
import noImagen from '../assets/images/noImagen.png';
import ProgressEstado from './ProgressEstado';
import ModalAsignar from './ModalAsignar';
import '../styles/Modal.css';
import ModalRetirar from './ModalRetirar';

const ModalAsset = ({ show, handleClose, asset, categoria }) => {

    const [showAsignar, setShowAsignar] = useState(false);
    const [showRetirar, setShowRetirar] = useState(false);

    const handleCloseAsignar = () => setShowAsignar(false);
    const handleShowAsignar = () => setShowAsignar(true);
    const handleCloseRetirar = () => setShowRetirar(false);
    const handleShowRetirar = () => setShowRetirar(true);

    return (
        <Modal show={show} onHide={handleClose} centered animation >
            <Modal.Header closeButton>
                <Modal.Title>{asset?.SubCategory}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 15 }}>
                    <Image src={(asset?.Image !== 'https://imagen') ? asset?.Image : noImagen} rounded style={{ width: '100%', height: 300 }} />
                </div>
                {/* <div className='line'></div> */}
                <div className='cont-text'>
                    <h6 className='subtitle'>Codigo:</h6>
                    <span className='text'>{asset?.Codigo || 'Sin Codigo'}</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Detalle:</h6>
                    <span className='text'>{asset?.Details}</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Fecha de Adquisicion:</h6>
                    <span className='text'>{asset?.Mes_I}/{asset?.Dia_I}/{asset?.Año_I}</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>UFV de Adquisicion:</h6>
                    <span className='text'>{asset?.UFV_Inicial}</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Valor de Adquisicion:</h6>
                    <span className='text'>{asset?.Valor_Inicial} Bs.</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Fecha Depreciado:</h6>
                    <span className='text'>{asset?.Fecha_Final || 'Sin Depreciar'}</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Valor Depreciado:</h6>
                    <span className='text'>{asset?.Valor_Depreciado === asset?.Valor_Inicial ? 'Sin Depreciar' : asset?.Valor_Depreciado} Bs.</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Asignado:</h6>
                    <span className='text'>{asset?.Asignado || 'Sin Asignar'}</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Estado:</h6>
                    <div style={{ width: '100%' }}>
                        <ProgressEstado state={asset?.Estado} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'space-between' }}>
                <Button variant="outline-warning" onClick={handleShowRetirar}>
                    Retirar
                </Button>
                <Button variant="outline-success" onClick={handleShowAsignar}>
                    Asignar
                </Button>
            </Modal.Footer>
            <ModalRetirar show={showRetirar} handleClose={handleCloseRetirar} asset={asset} />
            <ModalAsignar show={showAsignar} handleClose={handleCloseAsignar} asset={asset} categoria={categoria} />
        </Modal>
    )
}

export default ModalAsset