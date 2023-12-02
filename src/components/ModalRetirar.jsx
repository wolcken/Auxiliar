import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import '../styles/ModalAsignar.css';
import apiObject from '../api/DBfirestore';

const ModalRetirar = ({ show, handleClose, asset }) => {

    const [validated, setValidated] = useState(false);

    const [observacion, setObservacion] = useState('');

    const handleChange = (value) => {
        setObservacion(value);
    };

    const handleRetirar = (event) => {
        event.preventDefault();
        setValidated(true);
        if (observacion !== '') {
            apiObject.retirarAsset(asset, observacion);
            apiObject.deleteAsset(asset.Tipo, asset.id);
            handleExit();
        }
    };

    const handleClear = () => {
        setObservacion('');
    };

    const handleExit = () => {
        handleClose();
        handleClear();
    }

    return (
        <Modal show={show} onHide={handleExit} centered className='modal_modal'>
            <Modal.Header closeButton>
                <Modal.Title>{asset?.Category}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Observaciones:</Form.Label>
                        <Form.Control
                            as='textarea'
                            rows={3}
                            placeholder="Observaciones"
                            autoFocus
                            required
                            value={observacion}
                            onChange={(event) => handleChange(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Introduce la razon de la Baja.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'space-between' }}>
                <Button variant="outline-warning" onClick={handleClear}>
                    Limpiar
                </Button>
                <Button variant="outline-primary" onClick={handleRetirar}>
                    Retirar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalRetirar