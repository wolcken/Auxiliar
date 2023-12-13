import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import ListRetireds from '../utils/ListRetireds';
import noImagen from '../assets/images/noImagen.png';
import ProgressEstado from '../components/ProgressEstado';
import basura from '../assets/icons/basura.svg';
import '../styles/Retired.css';
import apiObject from '../api/DBfirestore';

const Retired = () => {

    const assetsRetireds = ListRetireds();

    const handleDelete = (categoria, id) => {
        apiObject.deleteRetired(categoria, id);
    }

    return (
        <>
            <h2>Retirados</h2>
            <Container fluid>
                <Row className="justify-content-md-center">
                    {assetsRetireds?.map((assets) => (
                        assets.map((asset) => (
                            <Card style={{ width: '18rem', padding: 5, margin: 5 }} bg={'light'} key={asset.id}>
                                <Card.Img variant="top" src={(asset?.Image !== 'https://imagen') ? asset?.Image : noImagen} style={{ width: '17rem', height: 200 }} />
                                <Card.Body>
                                    <Card.Title>{asset?.Category}</Card.Title>
                                    <Card.Title>{asset?.SubCategory}</Card.Title>
                                    <Card.Text>
                                        Codigo: {asset?.Codigo}
                                    </Card.Text>
                                    <Card.Text>
                                        Detalles: {asset?.Details}
                                    </Card.Text>
                                    <Card.Text>
                                        Observaciones: {asset?.Observaciones}
                                    </Card.Text>
                                    <ProgressEstado state={asset.Estado} />
                                </Card.Body>
                                <Card.Body>
                                    <img src={basura} alt="basura" className='basura' onClick={() => handleDelete(asset.Tipo, asset.id)} />
                                </Card.Body>
                            </Card>
                        ))
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Retired