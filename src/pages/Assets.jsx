import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import ListReportInventory from '../utils/ListReportInventory';
import noImagen from '../assets/images/noImagen.png';

const Assets = () => {

    const reportInventory = ListReportInventory();

    return (
        <Container fluid>
            <Row className="justify-content-md-center">
                {reportInventory?.map((inventories) => (
                    inventories.map((inventory) => (
                        <Card style={{ width: '18rem', padding: 5, margin: 5 }} bg={'light'} >
                            <Card.Img variant="top" src={(inventory?.Image !== 'https://imagen') ? inventory?.Image : noImagen} style={{ width: '17rem', height: 200 }} />
                            <Card.Body>
                                <Card.Title>{inventory?.SubCategory}</Card.Title>
                                <Card.Text>
                                    Codigo: {inventory?.Codigo}
                                </Card.Text>
                                <Card.Text>
                                    {inventory?.Details}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ))}
            </Row>
        </Container>
    )
}

export default Assets