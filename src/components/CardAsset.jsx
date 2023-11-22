import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import ordenador from '../assets/images/ordenador.png';
// import notImagen from '../assets/icons/imagen.svg';
import noImagen from '../assets/images/noImagen.png';

const CardAsset = ({ asset }) => {
    return (
        <Card style={{ width: '18rem', padding: 5, margin: 5 }}>
            <Card.Img variant="top" src={asset?.Image || noImagen} style={{width: '17rem', height: 200}} />
            <Card.Body>
                <Card.Title>{asset?.SubCategoria || asset.id}</Card.Title>
                <Card.Text>
                    {asset?.Details}
                </Card.Text>
                <Card.Text>
                    Estado: {asset?.Estado} /10
                </Card.Text>
                <Card.Text>
                    Valor Inicial: {asset?.Valor_Inicial} Bs
                </Card.Text>
                <Card.Text>
                    Valor Depreciado: {asset?.Valor_Depreciado} Bs
                </Card.Text>
                <Button variant="outline-primary">Ver Detalles</Button>
            </Card.Body>
        </Card>
    )
}

export default CardAsset