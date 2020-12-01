import React from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import './infoTeam.css'

export default function InfoTeam() {
    return (
        <Container className="container-info-team">
            <Row className="info-team">
                <h1 className="text-title">Conocer al equipo</h1>
                <Col>
                    <div>

                    <Card  className=" wow animate__animated animate__fadeInLeft card-info-team" data-wow-delay="10"  >
                        <Card.Img className="image-info-team" variant ="top" src=""></Card.Img>
                        <Card.Body>
                            <h2 className="title-card-info-team">&#123;  Web coorporativa</h2>
                            <p className="text-card-info-team">
                                Una web profesional, adaptada a todos los dispositivos, fácilmente administrable y optimizada para lograr un buen posicionamiento.
                                <br/>Lista para lograr resultados desde el primer momento.
                            </p>
                            <Button  className="card-button" variant="primary">Quieres una web profesional</Button>
                        </Card.Body>
                    </Card>

                    </div>
                </Col>
                <Col>
                    <div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}
