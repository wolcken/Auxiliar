import React from 'react';
import CardAsset from './CardAsset';
import { Container, Row } from 'react-bootstrap';

const ContainerAssets = ({ assets }) => {

    return (
        <Container fluid>
            <Row>
                {assets?.map((asset) => (
                    <CardAsset key={asset.id} asset={asset} />
                ))}
            </Row>
        </Container>
    )
}

export default ContainerAssets