import React from 'react';
import Select from 'react-select';
import SubCategory from '../utils/SubCategories';

const SelectSub = () => {

    const options = SubCategory.Muebles;

    return (
        <Select
            placeholder='Selecciona una Categoria'
            options={options}
            // onChange={(e) => handleChange(e.value)}
        />
    )
}

export default SelectSub