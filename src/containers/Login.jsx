import React, { useContext, useState } from 'react';
import { Button, Col, Form, Image, Row } from 'react-bootstrap';
import { AuthContext } from '../context/AuthProvider';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Credenciales';
import logo from '../assets/images/Cecasem30.png';
import usuario from '../assets/icons/usuario.svg';
import ojo from '../assets/icons/ojo.svg';
import ojo_cruzado from '../assets/icons/ojo-cruzado.svg';
import '../styles/Login.css';

const Login = ({ onLogIn }) => {

    const { setUser } = useContext(AuthContext);

    const [validated, setValidated] = useState(false);

    const [userDates, setUserDates] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);

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
        setValidated(true);
        if (userDates.email !== '' && userDates.password !== '') {
            signInWithEmailAndPassword(auth, userDates.email, userDates.password)
                .then(() => {
                    setUser(userDates);
                    onLogIn();
                }).catch((error) => {
                    alert(`Acceso Invalido: ${error}`)
                });
        }
    };

    return (
        <>
            <Form className='form_login' noValidate validated={validated}>

                <h2 className='title_login'>Iniciar Sesion</h2>

                <img src={logo} alt="logo" className='logo_login' />

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextUser">
                    <Form.Label column sm="2">
                        Usuario:
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control
                            required
                            type='email'
                            placeholder='Usuario'
                            onChange={(event) => handleChange('email', event.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <Form.Control.Feedback type="invalid">
                            Introduce un Correo Electronico valido.
                        </Form.Control.Feedback>
                    </Col>
                    <Col sm='1' className='col_icon'>
                        <Image
                            src={usuario}
                            className='icon_control'
                        />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Contraseña:
                    </Form.Label>
                    <Col sm="9">
                        <Form.Control
                            required
                            type={!showPassword ? 'password' : 'text'}
                            placeholder="Contraseña"
                            onChange={(event) => handleChange('password', event.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <Form.Control.Feedback type="invalid">
                            Introduce una Contraseña.
                        </Form.Control.Feedback>
                    </Col>
                    <Col sm='1' className='col_icon'>
                        <Image
                            src={!showPassword ? ojo_cruzado : ojo}
                            onClick={() => setShowPassword(!showPassword)}
                            className='icon_control icon_eye'
                        />
                    </Col>
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}>Iniciar</Button>
            </Form>
        </>
    )
}

export default Login