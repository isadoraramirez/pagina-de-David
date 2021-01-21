// Frameworks functions
import React from 'react';
// Frameworks and local styles
import './Home.scss';
import { Container } from 'semantic-ui-react';
// Components
import Blog from '../../components/Blog';
import EquipoProspectivistas from '../../components/EquipoProspectivistas';
import Contactanos from '../../components/Contactanos';

export default function Home() {
    return (
        <Container>
            <Blog />

            <EquipoProspectivistas />

            <Contactanos />

        </Container>
    )
}
