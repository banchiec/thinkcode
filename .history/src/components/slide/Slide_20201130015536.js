import React, {useEffect, useState} from 'react'
import './Slide.css'
import {Carousel, Row, Container, Col} from 'react-bootstrap'
import WOW from 'wowjs'

import imagen_code_thinking from '../../images/image_code_thinking.svg'
import proyecto1 from '../../images/proyecto1.png'
import proyecto2 from '../../images/proyecto2.jpg'
import proyecto3 from '../../images/proyecto3.jpg'
import proyecto4 from '../../images/proyecto4.jpg'

export default function Slide() {

    useEffect( ()=>{

        new WOW.WOW({
            live: false
        }).init();
    })

    return (
        <div>
            <Container fluid className="container-slider">
                <Row>
                    <Col>
                        <div className="content-text-infoSection">
                            <h2 >thinkcode.<span className=" wow text-title-infoSection animate__animated animate__fadeInLeft animate__delay-1s">PortFolio</span></h2>
                            <p className="text-infoSection">Dale un vistazo a nuestro trabajo, buscamos la diferencia en cada cliente,
                             destacando su singularidad.</p>
                        </div>                   
                    </Col>
                    <Col className="contanier-carousel-slider">

                        <Carousel>
                                <Carousel.Item interval={1500}>
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
                                <Carousel.Item interval={1000}>
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
                                <Carousel.Item interval={500}>
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
                                <Carousel.Item >
                                    <img 
                                    className="d-block"
                                    src={proyecto3}
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
                <Row className="container-secundary-slider">
                            <Carousel className="carousel-large" keyboad={false}  touch={false}slide={true} wrap={true} indicator={false}>
                                <Carousel.Item interval={1000}>
                                    <img
                                    className="d-block"
                                    src={imagen_code_thinking}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    {/* <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img
                                    className="d-block"
                                    src={proyecto2}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    {/* <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img 
                                    className="d-block"
                                    src={proyecto1}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    {/* <h3>Third slide label</h3> */}
                                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel> 
                </Row>
            </Container>
        </div>
    )
}
