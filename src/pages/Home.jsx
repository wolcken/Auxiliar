import React, { useState } from 'react';
import Login from '../containers/Login';
import Menu from '../containers/Menu';

const Home = () => {
    const [isLoggedIn,] = useState(true);
    return (
        <>
            {isLoggedIn ? (
                <>
                    <Menu />
                </>
            ) : (
                <Login />
            )}
        </>
    )
}

export default Home