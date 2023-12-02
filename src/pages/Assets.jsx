import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import ListReportInventory from '../utils/ListReportInventory';
import noImagen from '../assets/images/noImagen.png';
import ProgressEstado from '../components/ProgressEstado';

const Assets = () => {

    const reportInventory = ListReportInventory();

    return (
        <>
            <h2>Activos</h2>
            <Container fluid>
                <Row className="justify-content-md-center">
                    {reportInventory?.map((inventories) => (
                        inventories.map((inventory) => (
                            <Card style={{ width: '18rem', padding: 5, margin: 5 }} bg={'light'} key={inventory.id}>
                                <Card.Img variant="top" src={(inventory?.Image !== 'https://imagen') ? inventory?.Image : noImagen} style={{ width: '17rem', height: 200 }} />
                                <Card.Body>
                                    <Card.Title>{inventory?.Category}</Card.Title>
                                    <Card.Title>{inventory?.SubCategory}</Card.Title>
                                    <Card.Text>
                                        Codigo: {inventory?.Codigo}
                                    </Card.Text>
                                    <Card.Text>
                                        Detalles: {inventory?.Details}
                                    </Card.Text>
                                    <Card.Text>
                                        Valor: {inventory?.Valor_Depreciado}
                                    </Card.Text>
                                    <ProgressEstado state={inventory.Estado} />
                                </Card.Body>
                            </Card>
                        ))
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Assets