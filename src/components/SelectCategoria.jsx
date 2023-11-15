import React from 'react';
import Select from 'react-select';
import ListCategories from '../utils/ListCategories';

const SelectCategoria = ({ setSelect }) => {

    const options = ListCategories();

    return (
        <Select
            placeholder='Selected Asset'
            options={options}
            onChange={(e) => setSelect(e.value)}
        />
    )
}

export default SelectCategoria