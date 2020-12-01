import React from 'react'
import './Footer.css'
import {Container, Row, Col, Card } from 'react-bootstrap'


// import  {Home} from '../pages/Home'

export default function Footer() {
    return (
        <div>
            <Container  fluid className="container-footer">
                <Row>
                    <Col md={6}>
                        <Card  className="card-footer" data-wow-delay="10"  >
                            <Card.Img className="image-pricing-footer" variant ="top" src=""></Card.Img>
                            <Card.Body>
                                <h5 className="title-card-footer ">&#123;  .servicio destacados</h5>
                                <Row>
                                    <Col>
                                        <Card className="card">
                                            <Card.Body>
                                                <h5 className="title-footer">
                                                    Publicidad en Google Ads
                                                </h5>
                                                Anúnciate bien en Google AdWords.
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Body>
                                                <h5 className="title-footer">
                                                   Diseño de páginas webs 
                                                </h5>
                                                Webs rápidos optimizados para SEO & SEM.
                                            </Card.Body>

                                        </Card>
                                    </Col>
                                </Row>

                                <p className="text-card-footer">
                                </p>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card  className="card-footer" data-wow-delay="10"  >
                            <Card.Img className="image-pricing-footer" variant ="top" src=""></Card.Img>
                            <Card.Body>
                                <h5 className="title-card-footer">&#123; .partners </h5>
                                <p className="text-card-footer">
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md ={3}>
                        <Card  className="card-footer" data-wow-delay="10"  >
                            <Card.Img className="image-pricing-footer" variant ="top" src=""></Card.Img>
                            <Card.Body>
                                <h5 className="title-card-footer">&#123; .oficina Madrid</h5>
                                <p className="text-card-footer">
                                    Pº de la Castellana 211, Planta 11 <br/>
                                    28046, Madrid, España
                                </p>
                                <p className="text-card-footer">
                                    <a  href="https://www.google.es" className="pin-ic-enveloped">
                                        <i src="" class="fas fa-envelope fa-xs white-text fa-2x"> </i>
                                    </a>
                                        info@thinkcode.es
                                    <p>
                                    </p>
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col className="iconos-redes-sociales">
                        <a  href="https://www.gogle.es" className="pin-ic">
                        <p className="text-siguenos">
                        </p>Síguenos: 
                            <i src="" className="fab fa-instagram fa-xs white-text fa-2x"> </i>
                        </a>
                        <a href="https://www.google.es" className="pin-ic">
                            <i class="fab fa-facebook fa-xs white-text fa-2x"> </i>
                        </a>
                        <a href="https://www.google.es" className="pin-ic">
                            <i class="fab fa-twitter fa-xs white-text fa-2x"> </i>
                        </a>
                    </Col>
                    <Col>
                        <p>
                            Términos y condiciones  Política de privacidad y cookies
                        </p>
                    </Col>

                </Row>

            </Container>
            
        </div>
    )
}
