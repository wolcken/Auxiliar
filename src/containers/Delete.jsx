import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Select from 'react-select';
import ListAssets from '../utils/ListAssets';
import apiObject from '../api/DBfirestore';

const Delete = ({ show, handleClose, categoria }) => {

    const options = ListAssets(categoria?.value).listAsset;

    const [id, setId] = useState('');

    const handleDelete = () => {
        if (id !== '') {
            apiObject.deleteAsset(categoria.value, id);
            handleExit();
        } else {
            alert('Seleccione')
        }
    }

    const handleExit = () => {
        setId('');
        handleClose();
    }


    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete {categoria.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Select
                        placeholder='Selected Item'
                        options={options}
                        onChange={(e) => setId(e.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete