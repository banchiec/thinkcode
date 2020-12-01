import React from 'react'
import { Container, Row, Image, Col, Card, Button} from 'react-bootstrap'
import './infoTeam.css'
import gregorio from '../../images/gregorio.jpg'
import jjuan from '../../images/jjuan.jpg'

export default function InfoTeam() {
    return (
        <Container className="container-info-team">
                <h1 className="text-title">Conocer al equipo</h1>
            <Row className="info-team">
                <Col>
                    <Card  className=" wow animate__animated animate__fadeInLeft card_info_team " data-wow-delay="10"  >
                        <Image className="image-info-team" variant ="top" src={gregorio} roundedCircle />
                        <Card.Body>
                            <h5 className="title-card-info-team">&#123;Gregorio Herrero Calle</h5>
                            <p className="text-card-info-team">
                                Developer Manager + Fundador
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                </Col>
                <Col>
                    <Card  className=" wow animate__animated animate__fadeInLeft card_info_team " data-wow-delay="10"  >
                        <Image className="image-info-team" variant ="top" src={gregorio} roundedCircle />
                        <Card.Body>
                            <h5 className="title-card-info-team">&#123;Gregorio Herrero Calle</h5>
                            <p className="text-card-info-team">
                                Developer Manager + Fundador
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                </Col>
                <Col>

                    <Card  className=" wow animate__animated animate__fadeInRight card_info_team" data-wow-delay="10"  >
                        <Image className="image-info-team" variant ="top" src={jjuan} roundedCircle/>
                        <Card.Body>
                            <h5 className="title-card-info-team">&#123;Jose Juan Tineo García</h5>
                            <p className="text-card-info-team">
                                Developer Web + Fundador 
                            </p>
                            {/* <Button  className="card-button" variant="primary">Quieres una web profesional</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
