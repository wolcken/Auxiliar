import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import apiObject from '../api/DBfirestore';
import '../styles/ModalAsignar.css';

const ModalAsignar = ({ show, handleClose, asset, categoria }) => {

    const [validated, setValidated] = useState(false);

    const [asignado, setAsignado] = useState('');

    const handleChange = (value) => {
        setAsignado(value)
    }

    const handleAsignar = (event) => {
        event.preventDefault();
        setValidated(true);
        if (asignado !== '') {
            apiObject.updateAsignacion(categoria, asset.id, asignado);
            handleCancel();
        }
    }

    const handleCancel = () => {
        handleClose();
        setAsignado('');
    }

    return (
        <Modal show={show} onHide={handleCancel} centered animation className='modal_modal'>
            <Modal.Header closeButton >
                <Modal.Title >Asignar {asset?.SubCategory}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Usuario:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre de Usuario"
                            autoFocus
                            required
                            value={asignado}
                            onChange={(event) => handleChange(event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Introduce el Usuario al que se le Asignará este Activo.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'space-between' }}>
                <Button variant="outline-secondary" onClick={handleCancel}>
                    Cancelar
                </Button>
                <Button variant="outline-primary" onClick={handleAsignar}>
                    Guardar Asignacion
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalAsignar