import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import './infoTeam.css'
import gregorio from '../../images/gregorio.jpg'

export default function InfoTeam() {
    return (
        <Container className="container-info-team">
                <h1 className="text-title">Conocer al equipo</h1>
            <Row className="info-team">
                <Col>
                    <Card  className=" wow animate__animated animate__fadeInLeft " data-wow-delay="10"  >
                        <image className="image-info-team" variant ="top" src={gregorio} roundedCircle></image>
                        <Card.Body>
                            <h2 className="title-card-info-team">&#123;  Web coorporativa</h2>
                            <p className="text-card-info-team">
                                Una web profesional, adaptada a todos los dispositivos, fácilmente administrable y optimizada para lograr un buen posicionamiento.
                                <br/>Lista para lograr resultados desde el primer momento.
                            </p>
                            <Button  className="card-button" variant="primary">Quieres una web profesional</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>

                    <Card  className=" wow animate__animated animate__fadeInRight card-info-team" data-wow-delay="10"  >
                        <Card.Img className="image-info-team" variant ="top" src=""></Card.Img>
                        <Card.Body>
                            <h2 className="title-card-info-team">&#123;Web coorporativa</h2>
                            <p className="text-card-info-team">
                            </p>
                            <Button  className="card-button" variant="primary">Quieres una web profesional</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
