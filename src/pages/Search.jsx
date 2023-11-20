import React, { useState } from 'react';
import { Atras } from '../components/Atras';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SelectCategoria from '../components/SelectCategoria';
import ContainerAssets from '../components/ContainerAssets';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import appFirebase from '../Credenciales';
import { Col, Row } from 'react-bootstrap';

const db = getFirestore(appFirebase);

const Search = () => {

  const [select, setSelect] = useState('');

  const [asset, setAsset] = useState([]);

  const handleAssets = (categoria) => {
    getAssets(categoria);
  }

  const getAssets = async (categoria) => {
    try {
      const querySnapshot = await getDocs(collection(db, `Activos/Externo/${categoria}`));
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id })
      });
      setAsset(docs);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Search</h1>

      <Form>
        <Form.Group as={Row} className='mb-3' controlId='formSearch'>
          <Col sm='10'>
            <SelectCategoria setSelect={setSelect} />
          </Col>
          <Col sm='2'>
            <Button variant="outline-success" onClick={() => handleAssets(select)}>Search</Button>
          </Col>
        </Form.Group>
      </Form>

      {select !== '' ? <ContainerAssets assets={asset} /> : null}

      <Atras />
    </>
  )
}

export default Search