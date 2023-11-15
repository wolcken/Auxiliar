import React, { useState } from 'react';
import { Atras } from '../components/Atras';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SelectCategoria from '../components/SelectCategoria';
import CardAsset from '../components/CardAsset';
// import ContainerAssets from '../components/ContainerAssets';

const Search = () => {

  const [, setSelect] = useState('');

  return (
    <>
      <h1>Search</h1>

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <p></p>

      <SelectCategoria setSelect={setSelect} />

      <p></p>

      {/* {select !== '' ? <ContainerAssets categoria={select} /> : null} */}

      <p></p>

      <Container>
        <Row>
          <Col style={{ marginBottom: 5 }}>
            <CardAsset />
          </Col>
          <Col style={{ marginBottom: 5 }}>
            <CardAsset />
          </Col>
          <Col style={{ marginBottom: 5 }}>
            <CardAsset />
          </Col>
          <Col style={{ marginBottom: 5 }}>
            <CardAsset />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: 5 }}>
            <CardAsset />
          </Col>
          <Col style={{ marginBottom: 5 }}>
            <CardAsset />
          </Col>
          <Col style={{ marginBottom: 5 }}>
            <CardAsset />
          </Col>
          <Col style={{ marginBottom: 5 }} >
            <CardAsset />
          </Col>
        </Row>
      </Container>

      <Atras />
    </>
  )
}

export default Search