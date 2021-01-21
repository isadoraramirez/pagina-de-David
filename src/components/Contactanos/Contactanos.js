import React, { Fragment } from 'react';
// Frameworks and local styles
import './Contactanos.scss';
import { Form, Button, Card, Grid, Icon } from 'semantic-ui-react';
import qetzal from '../../assets/logos/qetzal.png'
import qetzall from '../../assets/logos/qetzall.png'


export default function Contactanos() {
    return (
        <Fragment>
            <Grid >
                <Grid.Row className="contactRow" columns={2}>
                    <div className="row" style={{ textAlign: "center" }}>
                        <div className="col-12">
                            <img alt="" src={qetzall} className="d-flex d-sm-inline-block mt-3 mr-5 ml-5" />
                            <img alt="" src={qetzal} className="d-none d-sm-inline-block mt-3 mr-5 ml-5 " />
                        </div>
                    </div>
                    <Grid.Column width={8} >
                        <h1 className="title-contact" >
                            Contáctanos
                        </h1>
                        <Form className="clients-dataForm" >
                            <Form.Input
                                placeholder="Nombre Completo"
                                name="nombreCompleto"
                            />
                            <Form.Input
                                type="email"
                                placeholder="Correo electrónico"
                                name="email"
                            />
                            <Button
                                className="btn-submit"
                                type="submit"
                            > Actualizar </Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={5} >
                        <Card.Content extra className="info-eefu">
                            <a
                                className="App-link"
                                href="https://www.facebook.com/profile.php?id=100008584777090"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name='at' />
                            Correo : lechugazteca@hotmail.com
                        </a>
                        </Card.Content>
                        <Card.Content extra className="info-eefu">
                            <a
                                className="App-link"
                                href="https://www.facebook.com/profile.php?id=100008584777090"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name='home' />
                                Dirección: Avenida Alcanfores y San Juan, Totoltepec s/n, Sta Cruz Acatlan, 53150 Naucalpan de Juárez, Méx.
                        </a>
                        </Card.Content>
                        <Card.Content extra className="info-eefu">
                            <a
                                className="App-link"
                                href="https://www.facebook.com/profile.php?id=100008584777090"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon name='tty' />
                            Tel : 555-555-555
                        </a>
                        </Card.Content>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </Fragment>
    )
}
