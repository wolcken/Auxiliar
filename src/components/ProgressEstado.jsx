import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressEstado = ({ state }) => {

    const now = Number(state * 10);

    return (
        <ProgressBar animated variant='primary' now={60} label={`${now}%`} />
    )
}

export default ProgressEstado