import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import noImagen from '../assets/images/noImagen.png';
import '../styles/Modal.css';
import ProgressEstado from './ProgressEstado';
import ModalAsignar from './ModalAsignar';

const ModalAsset = ({ show, handleClose, asset, categoria }) => {

    const [showAsignar, setShowAsignar] = useState(false);

    const handleCloseAsignar = () => setShowAsignar(false);
    const handleShowAsignar = () => setShowAsignar(true);

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
                    <span className='text'>22/10/2023</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Valor de Adquisicion:</h6>
                    <span className='text'>{asset?.Valor_Inicial} Bs.</span>
                </div>
                <div className='cont-text'>
                    <h6 className='subtitle'>Valor Depreciado:</h6>
                    <span className='text'>{asset?.Valor_Depreciado} Bs.</span>
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
                <Button variant="outline-warning" onClick={handleClose}>
                    Depreciar
                </Button>
                <Button variant="outline-success" onClick={handleShowAsignar}>
                    Asignar
                </Button>
            </Modal.Footer>
            <ModalAsignar show={showAsignar} handleClose={handleCloseAsignar} asset={asset} categoria={categoria} />
        </Modal>
    )
}

export default ModalAsset