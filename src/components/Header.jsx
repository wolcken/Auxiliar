import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import documento from '../assets/icons/documento.svg';
import busqueda from '../assets/icons/busqueda.svg';
import monedas from '../assets/icons/monedas.svg';
import votacion from '../assets/icons/votacion.svg';
import '../styles/Header.css';

function Header() {

    const routes = [];

    routes.push({
        id: 1,
        clasLi: 'cont_menu',
        im: votacion,
        alt: 'votacion',
        clasImg: 'icon',
        to: '/reports',
        clasNav: 'nav_a',
        text: 'Reportes',
    });
    routes.push({
        id: 2,
        clasLi: 'cont_menu',
        im: monedas,
        alt: 'monedas',
        clasImg: 'icon',
        to: '/inventory',
        clasNav: 'nav_a',
        text: 'Inventario',
    });
    routes.push({
        id: 3,
        clasLi: 'cont_menu',
        im: documento,
        alt: 'documento',
        clasImg: 'icon',
        to: '/registers',
        clasNav: 'nav_a',
        text: 'Registros',
    });
    routes.push({
        id: 4,
        clasLi: 'cont_menu',
        im: busqueda,
        alt: 'busqueda',
        clasImg: 'icon',
        to: '/search',
        clasNav: 'nav_a',
        text: 'Buscar',
    });

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
                            {routes.map((route) => {
                                return (
                                    <NavLink key={route.id} to={route.to} className={route.clasNav}>
                                        <img src={route.im} alt={route.alt} className={route.clasImg} />
                                        {route.text}
                                    </NavLink>
                                )
                            })}
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default Header;