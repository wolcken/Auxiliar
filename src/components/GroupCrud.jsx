import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Create from '../containers/Create';
import Edit from '../containers/Edit';
import Delete from '../containers/Delete';
import agregar from '../assets/icons/agregar-documento.svg';
import editar from '../assets/icons/archivo-de-edicion.svg';
import eliminar from '../assets/icons/eliminar-documento.svg';

const GroupCrud = ({ categoria }) => {

    const [showC, setShowC] = useState(false);
    const [showU, setShowU] = useState(false);
    const [showD, setShowD] = useState(false);

    const handleCloseC = () => setShowC(false);
    const handleCloseU = () => setShowU(false);
    const handleCloseD = () => setShowD(false);

    const handleShowC = () => setShowC(true);
    const handleShowU = () => setShowU(true);
    const handleShowD = () => setShowD(true);

    return (
        <>
            <Button
                variant="success"
                onClick={handleShowC}
                className='btn-btn'
            >
                <img src={agregar} alt="agregar" className='img-menu' />
                <h5 className='text-btn'>New</h5>
            </Button>{' '}
            <Button
                variant="primary"
                onClick={handleShowU}
                className='btn-btn'
            >
                <img src={editar} alt="editar" className='img-menu' />
                <h5 className='text-btn'>Edit</h5>
            </Button>{' '}
            <Button
                variant="danger"
                onClick={handleShowD}
                className='btn-btn'
            >
                <img src={eliminar} alt="eliminar" className='img-menu' />
                <h5 className='text-btn'>Delete</h5>
            </Button>

            <Create show={showC} handleClose={handleCloseC} categoria={categoria} />
            <Edit show={showU} handleClose={handleCloseU} categoria={categoria} />
            <Delete show={showD} handleClose={handleCloseD} categoria={categoria} />
        </>
    )
}

export default GroupCrud