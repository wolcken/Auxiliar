import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import apiObject from '../api/DBfirestore';
import SelectSub from '../components/SelectSub';

const Create = ({ show, handleClose, categoria }) => {

    const [validated, setValidated] = useState(false);

    const [asset, setAsset] = useState({
        Details: '',
        Valor_Inicial: '',
        Valor_Depreciado: '',
        Estado: '',
        Activo: false
    });

    const handleChange = (name, value) => {
        setAsset({ ...asset, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
        if (asset.Details !== ''
            && asset.Valor_Inicial !== ''
            && asset.Valor_Depreciado !== ''
            && asset.Estado !== ''
            && asset.Activo !== '') {
            apiObject.createAssets(asset, categoria.value);
            handleExit();
        }
    };

    const handleClear = () => {
        setAsset({
            Details: '',
            Valor_Inicial: '',
            Valor_Depreciado: '',
            Estado: '',
            Activo: false
        });
        setValidated(false);
    }

    const handleExit = () => {
        handleClear();
        handleClose();
    }

    return (
        <>
            <Modal
                show={show}
                onHide={handleExit}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{categoria.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated}>
                        <SelectSub />
                        <Form.Group controlId="validationCustom01" className='mb-3'>
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
                <Modal.Footer style={{ justifyContent: 'space-between' }}>
                    <Button variant="warning" onClick={handleClear}>
                        Clear
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Create