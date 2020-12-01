import React from 'react'
import {Carousel, Row, Container, Col} from 'react-bootstrap'

import imagen_code_thinking from '../../images/image_code_thinking.svg'
import proyecto1 from '../../images/proyecto1.png'
import proyecto2 from '../../images/proyecto2.jpg'

export default function Slide() {
    return (
        <div>
            <Container fluid>

                <Row>
                    <Col>

            <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
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
                        className="d-block w-100"
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
                        className="d-block w-100"
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
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
