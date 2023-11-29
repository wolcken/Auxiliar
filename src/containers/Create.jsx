import React, { useState } from 'react';
import { Button, Modal, Col, Form, Row, InputGroup } from 'react-bootstrap';
import apiObject from '../api/DBfirestore';
import SelectSub from '../components/SelectSub';

const Create = ({ show, handleClose, categoria }) => {

    const [validated, setValidated] = useState(false);

    const [asset, setAsset] = useState({
        SubCategory: '',
        Codigo: '',
        Details: '',
        Image: 'https://imagen',
        Dia: '',
        Mes: '',
        Año: '',
        Ufv: '',
        Valor: '',
        Estado: ''
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
            && asset.Dia !== ''
            && asset.Mes !== ''
            && asset.Año !== ''
            && asset.Ufv !== ''
            && asset.Valor !== ''
            && asset.Estado !== '') {
            apiObject.createAssets(asset, categoria);
            handleExit();
        }
    };

    const handleClear = () => {
        setAsset({
            SubCategory: '',
            Codigo: '',
            Details: '',
            Image: 'https://imagen',
            Dia: '',
            Mes: '',
            Año: '',
            Ufv: '',
            Valor: '',
            Estado: ''
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
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Dia</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend1">Dia</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        min={1}
                                        placeholder="Dia"
                                        aria-describedby="inputGroupPrepend1"
                                        required
                                        value={asset.Dia}
                                        onChange={(event) => handleChange('Dia', event.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Introduce un Dia.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Mes</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend2">Mes</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        min={1}
                                        placeholder="Mes"
                                        aria-describedby="inputGroupPrepend2"
                                        required
                                        value={asset.Mes}
                                        onChange={(event) => handleChange('Mes', event.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Introduce un Mes.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                <Form.Label>Año</Form.Label>
                                <InputGroup hasValidation>
                                    <InputGroup.Text id="inputGroupPrepend3">Año</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        min={1900}
                                        placeholder="Año"
                                        aria-describedby="inputGroupPrepend3"
                                        required
                                        value={asset.Año}
                                        onChange={(event) => handleChange('Año', event.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Introduce un Año.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Form.Group controlId="validationImage" className='mb-3'>
                            <Form.Label>UFV Inicial:</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="UFV Inicial"
                                required
                                value={asset.UFV_Inicial}
                                onChange={(event) => handleChange('Ufv', event.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Porfavor introduce la UFV valida.
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
                                    onChange={(event) => handleChange('Valor', event.target.value)}
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