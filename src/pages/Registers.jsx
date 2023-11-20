import React, { useState } from 'react'
import { Atras } from '../components/Atras';
import GroupCrud from '../components/GroupCrud';
import SelectCategoria from '../components/SelectCategoria';
// import { Categorias } from '../utils/Categorias';
import { v4 as uuidv4 } from 'uuid';

// const categorias = Categorias;

const Registers = () => {

  const [select, setSelect] = useState(null);

  return (
    <>
      <h1>Registers</h1>

      <SelectCategoria setSelect={setSelect} />

      <p></p>

      {/* {categorias.map((cat) => (
        select === cat
          ?
          <div key={uuidv4()}>
            <h2>{cat}</h2>
            <GroupCrud categoria={cat} />
          </div>
          :
          null
      ))} */}

      {select !== null
        ?
        <div key={uuidv4()}>
          <h2>{select}</h2>
          <GroupCrud categoria={select} />
        </div>
        :
        null
      }

      <Atras />
    </>
  )
}

export default Registers