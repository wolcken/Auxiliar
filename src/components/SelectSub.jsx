import React from 'react';
import Select from 'react-select';
import SubCategory from '../utils/SubCategories';

const SelectSub = ({ subCategoria, handleChange }) => {

    let options = [];

    if (subCategoria === 'Muebles') {
        options = SubCategory.Muebles;
    } else {
        if (subCategoria === 'Equipos') {
            options = SubCategory.Equipos;
        } else {
            if (subCategoria === 'Vehiculos') {
                options = SubCategory.Vehiculos
            }
        }
    }

    return (
        <Select
            className='mb-3'
            placeholder='Selecciona una Categoria'
            options={options}
            onChange={(e) => handleChange(e.label)}
        />
    )
}

export default SelectSub