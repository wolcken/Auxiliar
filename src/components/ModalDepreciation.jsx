import React, { useState } from 'react'
import { Modal, Button, Form, Col, Row, InputGroup } from 'react-bootstrap';
import { Depreciation } from '../tools/Depreciation';

const ModalDepreciation = ({ show, handleClose, assets }) => {

    const [validated, setValidated] = useState(false);

    const [datesDepreciation, setDatesDepreciation] = useState({
        Dia: '',
        Mes: '',
        Año: '',
        Ufv: ''
    })

    const handleChanges = (label, value) => {
        setDatesDepreciation({
            ...datesDepreciation, [label]: value
        })
    }

    const handleCalculate = (event) => {
        event.preventDefault();
        setValidated(true);
        if (datesDepreciation.Dia !== ''
            && datesDepreciation.Mes !== ''
            && datesDepreciation.Año !== ''
            && datesDepreciation.Ufv !== '') {
            Depreciation(datesDepreciation.Dia, datesDepreciation.Mes, datesDepreciation.Año, datesDepreciation.Ufv, assets);
            handleExit();
        }
    };

    const handleClear = () => {
        setDatesDepreciation({
            Dia: '',
            Mes: '',
            Año: '',
            Ufv: ''
        });
        setValidated(false);
    }

    const handleExit = () => {
        handleClear();
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleExit} centered>
            <Modal.Header closeButton>
                <Modal.Title>Depreciar</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated}>
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
                                    value={datesDepreciation.Dia}
                                    onChange={(event) => handleChanges('Dia', event.target.value)}
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
                                    placeholder="Mes"
                                    min={1}
                                    aria-describedby="inputGroupPrepend2"
                                    required
                                    value={datesDepreciation.Mes}
                                    onChange={(event) => handleChanges('Mes', event.target.value)}
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
                                    value={datesDepreciation.Año}
                                    onChange={(event) => handleChanges('Año', event.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Introduce un Año.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="validationCustom03">
                        <Form.Label>UFV:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="UFV del dia"
                            required
                            value={datesDepreciation.Ufv}
                            onChange={(event) => handleChanges('Ufv', event.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Introduce el UFV para el Calculo.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'space-between' }}>
                <Button variant="outline-secondary" onClick={handleClear}>
                    Limpiar
                </Button>
                <Button variant="outline-primary" onClick={handleCalculate}>
                    Calcular y Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalDepreciation