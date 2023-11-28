import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import ListAssets from '../utils/ListAssets';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import apiObject from '../api/DBfirestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from '../Credenciales';

const db = getFirestore(app);

const Edit = ({ show, handleClose, categoria }) => {

    const options = ListAssets(categoria?.value).listAsset;

    const [id, setId] = useState(null);

    const [validated, setValidated] = useState(false);

    const [asset, setAsset] = useState({
        SubCategory: '',
        Details: '',
        Valor_Inicial: '',
        Valor_Depreciado: '',
        Estado: '',
        Activo: ''
    });

    const handleId = (value) => {
        setId(value);
        getAsset(value);
    }

    const handleChange = (name, value) => {
        setAsset({ ...asset, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
        if (id !== ''
            && asset.Details !== ''
            && asset.Valor_Inicial !== ''
            && asset.Valor_Depreciado !== ''
            && asset.Estado !== ''
            && asset.Activo !== '') {
            apiObject.updateAsset(id, asset, categoria.value);
            handleExit();
        }
    };

    const handleClear = () => {
        setId('');
        setAsset({
            SubCategory: '',
            Details: '',
            Valor_Inicial: '',
            Valor_Depreciado: '',
            Estado: '',
            Activo: ''
        });
        setValidated(false);
    }

    const handleExit = () => {
        handleClear();
        handleClose();
    }

    const getAsset = async (id) => {
        try {
            const docRef = doc(db, `Activos/Externo/${categoria.value}`, id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setAsset({ ...docSnap.data() });
            } else {
                alert('No existe el usuario');
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleExit}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit {categoria.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Select
                        placeholder='Selected Item'
                        options={options}
                        onChange={(e) => handleId(e.value)}
                    />

                    <Form noValidate validated={validated}>
                        <Form.Group controlId="validationCustom01" className='mb-3 mt-3'>
                            <Form.Label>Details</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                type='text'
                                placeholder='Details'
                                value={asset.Details}
                                onChange={(event) => handleChange('Details', event.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid Details.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                <Form.Label>Starting Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    min={0}
                                    placeholder="Starting Price"
                                    required
                                    value={asset.Valor_Inicial}
                                    onChange={(event) => handleChange('Valor_Inicial', event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Price.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom03">
                                <Form.Label>Depreciated Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    min={0}
                                    placeholder="Depreciated Price"
                                    required
                                    value={asset.Valor_Depreciado}
                                    onChange={(event) => handleChange('Valor_Depreciado', event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Price.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom02">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    min={0}
                                    max={10}
                                    placeholder="State"
                                    value={asset.Estado}
                                    onChange={(event) => handleChange('Estado', event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid State.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom04">
                                <Form.Label>Asset</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Asset"
                                    value={asset.Activo}
                                    onChange={(event) => handleChange('Activo', event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid Asset.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit