import React, { useState } from 'react'
import GroupCrud from '../components/GroupCrud';
import SelectCategoria from '../components/SelectCategoria';
import { v4 as uuidv4 } from 'uuid';

const Registers = () => {

  const [select, setSelect] = useState(null);

  const handleChange = (e) => {
    setSelect(e);
    // console.log(e)
  }

  return (
    <>
      <h2>Registros</h2>

      <div style={{
        marginLeft: '5%',
        marginRight: '5%'
      }}>
        <SelectCategoria handleChange={handleChange} />
      </div>
      {select !== null
        ?
        <div key={uuidv4()} style={{ marginTop: 10 }}>
          <h2>{select.label}</h2>
          <GroupCrud categoria={select} />
        </div>
        :
        null
      }
    </>
  )
}

export default Registers