import React from 'react';
import Select from 'react-select';
import ListCategories from '../utils/ListCategories';

const SelectCategoria = ({ handleChange }) => {

    const options = ListCategories();

    return (
        <Select
            placeholder='Selecciona una Categoria'
            options={options}
            onChange={(e) => handleChange(e.value)}
        />
    )
}

export default SelectCategoria