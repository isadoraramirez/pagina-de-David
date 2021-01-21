import React, { Fragment } from 'react';
// Frameworks and local styles
import './EquipoProspectivistas.scss';
import { Card, Icon, Image } from 'semantic-ui-react'
import davo from '../../assets/equipo-eefu/davo.jpg'
import bluebeat from '../../assets/equipo-eefu/bluebeat.jpeg'
import jair from '../../assets/equipo-eefu/jair.jpeg'
import fer from '../../assets/equipo-eefu/fer.jpeg'



export default function EquipoProspectivistas() {
    return (
        <Fragment>
            <h1 className="title-blog" >
                Miembros de la Organización EEFU
            </h1>
            <Card.Group className="group-articles">
                <Card>
                    <Image src={davo} wrapped ui={false} />
                    <Card.Content>
                        <Card>David Lechuga Huerta </Card>
                        <Card.Meta> CTO de EEFU</Card.Meta>
                        <Card.Description>
                            David es Polítologo, Programador full Stack, y
                            Arquitecto de Soluciones Cloud.
                            su motivacion es la búsqueda de soluciones
                            normativas, prácticas, y tecnológicas
                            para empresas, individuos, y sociedades.
                 </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a
                            className="App-link"
                            href="https://www.facebook.com/profile.php?id=100008584777090"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name='facebook official' />
                            facebook
                        </a>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={fer} wrapped ui={false} />
                    <Card.Content>
                        <Card> Reyes Sanchez Maria Fernanda </Card>
                        <Card.Meta> CMO de EEFU</Card.Meta>
                        <Card.Description>
                            Profesional de la Administración Pública,
                            politóloga y diseñadora gráfica, pendiente de
                            las necesidades sociales y estudiosa de los fenómenos políticos nacionales
                            e internacionales. Especialista en Políticas públicas
                            y programas gubernamentales.
                 </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a
                            className="App-link"
                            href="https://www.facebook.com/profile.php?id=100008584777090"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name='facebook official' />
                            facebook
                        </a>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={jair} wrapped ui={false} />
                    <Card.Content>
                        <Card> Alamilla Marin Jair </Card>
                        <Card.Meta> CLO de EEFU</Card.Meta>
                        <Card.Description>
                            Catedrático e investigador.
                            Politólogo, abogado e internacionalista.
                            Asesor, analista y consultor político. Representante jurídico.
                 </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a
                            className="App-link"
                            href="https://www.facebook.com/profile.php?id=100008584777090"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name='facebook official' />
                            facebook
                        </a>
                    </Card.Content>
                </Card>
                <Card>
                    <Image src={bluebeat} wrapped ui={false} />
                    <Card.Content>
                        <Card> Hernandez Dominguez Oscar Alan </Card>
                        <Card.Meta> CEO de EEFU</Card.Meta>
                        <Card.Description>
                            Alan es un politogo y administrador público.
                            Con estudios especializados en la creación y evaluación de
                            políticas públicas, así como en los temas de atención a
                            grupos vulnerables, como lo son: personas con alguna
                            discapacidad.
                 </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a
                            className="App-link"
                            href="https://www.facebook.com/profile.php?id=100008584777090"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon name='facebook official' />
                            facebook
                        </a>
                    </Card.Content>
                </Card>
            </Card.Group>
        </Fragment>
    )
}
