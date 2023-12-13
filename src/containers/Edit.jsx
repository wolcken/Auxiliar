import React, { useState } from 'react';
import { Button, Modal, Col, Form, Row, InputGroup } from 'react-bootstrap';
import Select from 'react-select';
import ListAssets from '../utils/ListAssets';
import apiObject from '../api/DBfirestore';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { app } from '../Credenciales';

const db = getFirestore(app);

const Edit = ({ show, handleClose, categoria }) => {

    const options = ListAssets(categoria?.value).listAsset;

    const [id, setId] = useState(null);

    const [validated, setValidated] = useState(false);

    const [asset, setAsset] = useState({
        Codigo: '',
        Details: '',
        Image: '',
        Dia_I: '',
        Mes_I: '',
        Año_I: '',
        UFV_Inicial: '',
        Valor_Inicial: '',
        Estado: ''
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
            && asset.Codigo !== ''
            && asset.Details !== ''
            && asset.Image !== ''
            && asset.Dia_I !== ''
            && asset.Mes_I !== ''
            && asset.Año_I !== ''
            && asset.UFV_Inicial !== ''
            && asset.Valor_Inicial !== ''
            && asset.Estado !== '') {
            apiObject.updateAsset(id, asset, categoria.value);
            handleExit();
        }
    };

    const handleClear = () => {
        setId('');
        setAsset({
            Codigo: '',
            Details: '',
            Image: '',
            Dia_I: '',
            Mes_I: '',
            Año_I: '',
            UFV_Inicial: '',
            Valor_Inicial: '',
            Estado: ''
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
                alert('No existe el Activo');
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
                    <Modal.Title>Editar {categoria.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Select
                        placeholder='Seleccione Codigo'
                        options={options}
                        onChange={(e) => handleId(e.value)}
                    />

                    <Form noValidate validated={validated}>
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
                                        value={asset.Dia_I}
                                        onChange={(event) => handleChange('Dia_I', event.target.value)}
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
                                        value={asset.Mes_I}
                                        onChange={(event) => handleChange('Mes_I', event.target.value)}
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
                                        value={asset.Año_I}
                                        onChange={(event) => handleChange('Año_I', event.target.value)}
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
                                onChange={(event) => handleChange('UFV_Inicial', event.target.value)}
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