import React, { useState } from 'react';
import SelectCategoria from '../components/SelectCategoria';
import ContainerAssets from '../components/ContainerAssets';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import appFirebase from '../Credenciales';

const db = getFirestore(appFirebase);

const Search = () => {

  const [select, setSelect] = useState('');

  const [asset, setAsset] = useState([]);

  const handleChange = (value) => {
    setSelect(value);
    getAssets(value);
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
      <h2>Buscar por Categoria</h2>

      <div style={{
        marginLeft: '5%',
        marginRight: '5%'
      }}>
        <SelectCategoria setSelect={setSelect} handleChange={handleChange} />
      </div>

      {select !== '' ? <ContainerAssets assets={asset} /> : null}
    </>
  )
}

export default Search