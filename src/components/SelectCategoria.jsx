import React from 'react';
import Select from 'react-select';
// import ListCategories from '../utils/ListCategories';
import { Categories } from '../utils/Categories';

const SelectCategoria = ({ handleChange }) => {

    // const options = ListCategories();
    const options = Categories;

    return (
        <Select
            placeholder='Selecciona una Categoria'
            options={options}
            onChange={(e) => handleChange(e)}
        />
    )
}

export default SelectCategoria