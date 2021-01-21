//Layout
import LayoutBasic from '../layouts/LayoutBasic'

// Pages
import Home from '../pages/Home';
import Galeria from '../pages/Galeria';
import Servicios from '../pages/Servicios';
import Trabajos from '../pages/Trabajos';

const routes = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
        exact: true,
    },

    {
        path: "/galeria",
        layout: LayoutBasic,
        component: Galeria,
        exact: true,
    },
    {
        path: "/servicios",
        layout: LayoutBasic,
        component: Servicios,
        exact: true,
    },
    {
        path: "/trabajos",
        layout: LayoutBasic,
        component: Trabajos,
        exact: true,
    },

]

export default routes;