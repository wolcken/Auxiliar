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
        SubCategory: '',
        Codigo: '',
        Details: '',
        Image: 'https://imagen',
        Valor_Inicial: '',
        Valor_Depreciado: '',
        Estado: '',
        Activo: true,
        Asignado: ''
    });

    const handleSelect = (e) => {
        setAsset({
            ...asset, SubCategory: e
        })
    }

    const handleChange = (name, value) => {
        setAsset({ ...asset, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidated(true);
        if (asset.SubCategory !== ''
            && asset.Codigo !== ''
            && asset.Details !== ''
            && asset.Image !== ''
            && asset.Valor_Inicial !== ''
            && asset.Estado !== '') {
            apiObject.createAssets(asset, categoria.value);
            handleExit();
        }
    };

    const handleClear = () => {
        setAsset({
            SubCategory: '',
            Codigo: '',
            Details: '',
            Image: 'https://imagen',
            Valor_Inicial: '',
            Valor_Depreciado: '',
            Estado: '',
            Activo: true,
            Asignado: ''
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

                        <SelectSub subCategoria={categoria.value} handleChange={handleSelect} />

                        <Form.Group controlId="validationCodigo" className='mb-3'>
                            <Form.Label>Codigo:</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Codigo'
                                required
                                min={1000}
                                value={asset.Codigo}
                                onChange={(event) => handleChange('Codigo', event.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Porfavor introduce un Codigo valido.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationDetails" className='mb-3'>
                            <Form.Label>Detalles:</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={3}
                                type='text'
                                placeholder='Detalles'
                                value={asset.Details}
                                onChange={(event) => handleChange('Details', event.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Porfavor introduce un Detalle valido.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationImage" className='mb-3'>
                            <Form.Label>Url Imagen:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Url Imagen"
                                required
                                value={asset.Image}
                                onChange={(event) => handleChange('Image', event.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Porfavor introduce una Url de Imagen.
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationStartingPrice">
                                <Form.Label>Valor Inicial:</Form.Label>
                                <Form.Control
                                    type="number"
                                    min={0}
                                    placeholder="Valor Inicial"
                                    required
                                    value={asset.Valor_Inicial}
                                    onChange={(event) => handleChange('Valor_Inicial', event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Porfavor introduce un Valor Inicial.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationState">
                                <Form.Label>Estado</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    min={0}
                                    max={10}
                                    placeholder="Estado"
                                    value={asset.Estado}
                                    onChange={(event) => handleChange('Estado', event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Porfavor introduce el Estado.
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