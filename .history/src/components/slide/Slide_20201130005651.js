import React from 'react'
import './Slide.css'
import {Carousel, Row, Container, Col} from 'react-bootstrap'

import imagen_code_thinking from '../../images/image_code_thinking.svg'
import proyecto1 from '../../images/proyecto1.png'
import proyecto2 from '../../images/proyecto2.jpg'

export default function Slide() {
    return (
        <div>
            <Container fluid className="container-slider">

                <Row>
                    <Col>
                        <div className="content-text-infoSection">
                            <h2 >thinkcode.<span className="text-title-infoSection animate__animated animate__fadeInLeft animate__delay-1s">PortFolio</span></h2>
                            <p className="text-infoSection">Diseño y desarrollo de aplicaciones y páginas web para tu negocio o proyecto.
                            Disfrutamos mucho con lo que hacemos, compruébalo.</p>
                        </div>                   
                    </Col>
                    <Col className="contanier-carouse-slider">

                        <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img
                                    className="d-block"
                                    src={imagen_code_thinking}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                    className="d-block"
                                    src={proyecto2}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                    className="d-block"
                                    src={proyecto1}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
