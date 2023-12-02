import documento from '../assets/icons/documento.svg';
import busqueda from '../assets/icons/busqueda.svg';
import monedas from '../assets/icons/monedas.svg';
import votacion from '../assets/icons/votacion.svg';
import aplicaciones from '../assets/icons/aplicaciones.svg';
import caja from '../assets/icons/caja-abierta.svg';

export const ListRoutes = [
    {
        id: 1,
        clasLi: 'cont_menu',
        im: votacion,
        alt: 'votacion',
        clasImg: 'icon',
        to: '/reports',
        clasNav: 'nav_a',
        text: 'Reportes',
    },
    {
        id: 2,
        clasLi: 'cont_menu',
        im: aplicaciones,
        alt: 'aplicaciones',
        clasImg: 'icon',
        to: '/assets',
        clasNav: 'nav_a',
        text: 'Activos',
    },
    {
        id: 3,
        clasLi: 'cont_menu',
        im: monedas,
        alt: 'monedas',
        clasImg: 'icon',
        to: '/inventory',
        clasNav: 'nav_a',
        text: 'Inventario',
    },
    {
        id: 4,
        clasLi: 'cont_menu',
        im: documento,
        alt: 'documento',
        clasImg: 'icon',
        to: '/registers',
        clasNav: 'nav_a',
        text: 'Registros',
    },
    {
        id: 5,
        clasLi: 'cont_menu',
        im: busqueda,
        alt: 'busqueda',
        clasImg: 'icon',
        to: '/search',
        clasNav: 'nav_a',
        text: 'Buscar',
    },
    {
        id: 6,
        clasLi: 'cont_menu',
        im: caja,
        alt: 'retired',
        clasImg: 'icon',
        to: '/retired',
        clasNav: 'nav_a',
        text: 'Retirado',
    }
]