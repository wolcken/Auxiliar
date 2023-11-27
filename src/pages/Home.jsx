import React, { useContext } from 'react';
import Login from '../containers/Login';
import Inicio from '../containers/Inicio';
import { AuthContext } from '../context/AuthProvider';

const Home = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

    const handleLogIn = () => {
        setIsLoggedIn(true);
    }

    return (
        <>
            {isLoggedIn ? (
                <>
                    <Inicio />
                </>
            ) : (
                <>
                    <Login onLogIn={handleLogIn} />
                </>
            )}
        </>
    )
}

export default Home