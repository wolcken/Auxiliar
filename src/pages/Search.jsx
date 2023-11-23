import React, { useState } from 'react';
import SelectCategoria from '../components/SelectCategoria';
import ContainerAssets from '../components/ContainerAssets';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import appFirebase from '../Credenciales';
import ImageSearch from '../components/ImageSearch';

const db = getFirestore(appFirebase);

const Search = () => {

  const [select, setSelect] = useState(null);

  const [asset, setAsset] = useState([]);

  const handleChange = (e) => {
    setSelect(e);
    getAssets(e.value);
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
        <SelectCategoria handleChange={handleChange} />
      </div>

      {select !== null ? <ContainerAssets assets={asset} /> : <ImageSearch />}
    </>
  )
}

export default Search