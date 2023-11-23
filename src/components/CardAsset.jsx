import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import noImagen from '../assets/images/noImagen.png';
import ModalAsset from './ModalAsset';

const CardAsset = ({ asset }) => {

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
                <ModalAsset show={show} handleClose={handleClose} asset={asset} />
            </Card.Body>
        </Card>
    )
}

export default CardAsset