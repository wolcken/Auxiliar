import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import noImagen from '../assets/images/noImagen.png';
import ModalAsset from './ModalAsset';

const CardAsset = ({ asset, categoria }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card style={{ width: '18rem', padding: 5, margin: 5 }} bg={'light'} >
            <Card.Img variant="top" src={(asset?.Image !== 'https://imagen') ? asset?.Image : noImagen} style={{ width: '17rem', height: 200 }} />
            <Card.Body>
                <Card.Title>{asset?.SubCategory}</Card.Title>
                <Card.Text>
                    Codigo: {asset?.Codigo}
                </Card.Text>
                <Card.Text>
                    {asset?.Details}
                </Card.Text>
                <Button size='sm' variant="outline-primary" onClick={handleShow}>Ver Detalles</Button>
                <ModalAsset show={show} handleClose={handleClose} asset={asset} categoria={categoria} />
            </Card.Body>
        </Card>
    )
}

export default CardAsset