import React, { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/Cecasem30.png';
import '../styles/Login.css';
import { AuthContext } from '../context/AuthProvider';

const Login = ({ onLogIn }) => {

    const { setUser } = useContext(AuthContext);

    const [userDates, setUserDates] = useState({
        name: '',
        password: ''
    });

    const handleChange = (label, value) => {
        setUserDates({
            ...userDates, [label]: value
        });
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    const handleLogin = () => {
        if (userDates.name !== '' && userDates.password !== '') {
            setUser(userDates);
            onLogIn();
        } else {
            alert('Inicio de sesion fallido');
        }
    };

    return (
        <>
            <Form className='form_login'>

                <h2 className='title_login'>Iniciar Sesion</h2>

                <img src={logo} alt="logo" className='logo_login' />

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                    <Form.Label column sm="2">
                        Usuario:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type='text'
                            placeholder='Nombre de Usuario'
                            onChange={(event) => handleChange('name', event.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Contraseña:
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            onChange={(event) => handleChange('password', event.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </Col>
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}>Iniciar Sesion</Button>
            </Form>
        </>
    )
}

export default Login