import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import dejar from '../assets/icons/dejar.svg';
import '../styles/Header.css';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { ListRoutes } from '../utils/ListRoutes';

function Header() {

    const { setUser, isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    const routes = ListRoutes;

    const handleExit = () => {
        setUser(null);
        setIsLoggedIn(false);
    }

    return (
        <Navbar bg="primary" data-bs-theme="dark" key='md' expand='md' className='mb-3'>
            <Container fluid>
                <Navbar.Brand href="/">Cecasem</Navbar.Brand>
                <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-md'} />
                <Navbar.Offcanvas
                    id={'offcanvasNavbar-expand-md'}
                    aria-labelledby={'offcanvasNavbarLabel-expand-md'}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={'offcanvasNavbarLabel-expand-md'}>
                            Cecasima
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            {isLoggedIn && routes.map((route) => {
                                return (
                                    <NavLink key={route.id} to={route.to} className={route.clasNav}>
                                        <img src={route.im} alt={route.alt} className={route.clasImg} />
                                        {route.text}
                                    </NavLink>
                                )
                            })}
                            {isLoggedIn &&
                                <NavLink to={'/'} className='nav_a' onClick={handleExit}>
                                    <img src={dejar} alt='dejar' className='icon' />
                                    Salir
                                </NavLink>
                            }
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;