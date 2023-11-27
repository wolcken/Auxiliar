import React, { useState } from 'react'
import GroupCrud from '../components/GroupCrud';
import SelectCategoria from '../components/SelectCategoria';
import { v4 as uuidv4 } from 'uuid';
import ImageSearch from '../components/ImageSearch';
import Loading from '../assets/images/loading-load.gif';

const Registers = () => {

  const [select, setSelect] = useState(null);

  const handleChange = (e) => {
    setSelect(e);
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
          <h3>{select.label}</h3>
          <div>
            <GroupCrud categoria={select} />
          </div>
          <img src={Loading} alt="loading" />
        </div>
        :
        <ImageSearch />
      }
    </>
  )
}

export default Registers