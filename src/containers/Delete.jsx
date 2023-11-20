import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import ListAssets from '../utils/ListAssets';
import apiObject from '../api/DBfirestore';

const Delete = ({ show, handleClose, categoria }) => {

    const options = ListAssets(categoria).listAsset;

    const [id, setId] = useState('');

    const handleDelete = () => {
        if (id !== '') {
            apiObject.deleteAsset(categoria, id);
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
                    <Modal.Title>Delete {categoria}</Modal.Title>
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