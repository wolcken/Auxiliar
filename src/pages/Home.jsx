import React, { useState } from 'react';
import Login from '../containers/Login';
import Inicio from '../containers/Inicio';

const Home = () => {
    const [isLoggedIn,] = useState(true);
    return (
        <>
            {isLoggedIn ? (
                <>
                    <Inicio />
                </>
            ) : (
                <Login />
            )}
        </>
    )
}

export default Home