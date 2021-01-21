import React, { Fragment } from 'react'
import './Servicios.scss';
import { Image, Container } from 'semantic-ui-react';
import finanza from '../../assets/images-services/finanza.png'
import organizacion from '../../assets/images-services/organizacion.jpg'
import prospectiva from '../../assets/images-services/prospectiva.png'


export default function Servicios() {
    return (
        <Fragment>
            <h1 className="title-blog" >
                Nuestros Servicios
            </h1>
            <Container className="container_services">
                <div className="row">
                    <div className="col-6">
                        <Image
                            src={prospectiva}
                            rounded
                            alt="twitgov-avatar"

                        />
                    </div>
                    <div className="col-6 servicesCol">
                        <h4 className="description-servicios" >  Descubre en nuestro blog los artículos más interesantes y nuevos sobre la ciencia política  </h4>
                    </div>
                </div>

                <div className="row">

                    <div className="col-6 servicesCol">
                        <h4 className="description-servicios" >  Descubre en nuestro blog los artículos más interesantes y nuevos sobre la ciencia política  </h4>
                    </div>

                    <div className="col-6">
                        <Image
                            src={finanza}
                            circular
                            alt="twitgov-avatar"

                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <Image
                            src={organizacion}
                            circular
                            alt="twitgov-avatar"

                        />
                    </div>
                    <div className="col-6 servicesCol">
                        <h4 className="description-servicios" >  Descubre en nuestro blog los artículos más interesantes y nuevos sobre la ciencia política  </h4>
                    </div>
                </div>
            </Container>

        </Fragment>
    )
}
