import React, { useState } from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import apiObject from '../api/DBfirestore';

const ModalAsignar = ({ show, handleClose, asset, categoria }) => {

    const [asignado, setAsignado] = useState('');

    const handleChange = (value) => {
        setAsignado(value)
    }

    const handleAsignar = () => {
        if (asignado !== '') {
            apiObject.updateAsignacion(categoria, asset.id, asignado);
            handleCancel();
        } else {
            alert('Introduzca el usuario');
        }
    }

    const handleCancel = () => {
        handleClose();
        setAsignado('');
    }

    return (
        <Modal show={show} onHide={handleCancel} centered animation>
            <Modal.Header closeButton >
                <Modal.Title >Asignar {asset?.SubCategory}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Introduce en usuario al que se le asignara este activo:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre de Usuario"
                            autoFocus
                            onChange={(event) => handleChange(event.target.value)}
                        />
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