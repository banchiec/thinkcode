import React from 'react'
import './Footer.css'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
export default function Footer() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs ={6}>
                    <Card  className="card-footer" data-wow-delay="10"  >
                        <Card.Img className="image-pricing" variant ="top" src=""></Card.Img>
                        <Card.Body>
                            <h2 className="title-card">&#123;  Web coorporativa</h2>
                            <p className="text-card">
                                Una web profesional, adaptada a todos los dispositivos, fácilmente administrable y optimizada para lograr un buen posicionamiento.
                                <br/>Lista para lograr resultados desde el primer momento.
                            </p>
                            <Button  className="card-button" variant="primary">Quieres una web profesional</Button>
                        </Card.Body>
                    </Card>
                        
                    </Col>
                    <Col xs ={6}>
                    </Col>
                    <Col xs ={6}>
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}
