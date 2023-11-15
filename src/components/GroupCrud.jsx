import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Create from '../containers/Create';
import Edit from '../containers/Edit';
import Delete from '../containers/Delete';

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
            >New</Button>{' '}
            <Button
                variant="primary"
                onClick={handleShowU}
            >Edit</Button>{' '}
            <Button
                variant="danger"
                onClick={handleShowD}
            >Delete</Button>

            <Create show={showC} handleClose={handleCloseC} categoria={categoria} />
            <Edit show={showU} handleClose={handleCloseU} categoria={categoria} />
            <Delete show={showD} handleClose={handleCloseD} categoria={categoria} />
        </>
    )
}

export default GroupCrud