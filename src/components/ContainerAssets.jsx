import React from 'react'
import apiObject from '../api/DBfirestore'

const ContainerAssets = ({ categoria }) => {

    const aux = apiObject.useAssets(categoria);
    console.log(aux);

    return (
        <div>{categoria}</div>
    )
}

export default ContainerAssets