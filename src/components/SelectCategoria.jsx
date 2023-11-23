import React from 'react';
import Select from 'react-select';
import { Categories } from '../utils/Categories';

const SelectCategoria = ({ handleChange }) => {

    const options = Categories;

    return (
        <Select
            className='mb-3'
            placeholder='Selecciona una Categoria'
            options={options}
            onChange={(e) => handleChange(e)}
        />
    )
}

export default SelectCategoria