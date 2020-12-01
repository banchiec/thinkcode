import React from 'react'
import './Footer.css'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
export default function Footer() {
    return (
        <div>
            <Container  fluid className="container-footer">
                <Row>
                    <Col md={6}>
                        <Card  className="card-footer" data-wow-delay="10"  >
                            <Card.Img className="image-pricing-footer" variant ="top" src=""></Card.Img>
                            <Card.Body>
                                <h5 className="title-card-footer">&#123;  .web coorporativa</h5>
                                <p className="text-card-footer">
                                </p>
                                {/* <Button  className="card-button" variant="primary">Quieres una web profesional</Button> */}
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
                                {/* <Button  className="card-button" variant="primary">Quieres una web profesional</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md ={3}>
                        <Card  className="card-footer" data-wow-delay="10"  >
                            <Card.Img className="image-pricing-footer" variant ="top" src=""></Card.Img>
                            <Card.Body>
                                <h5 className="title-card-footer">&#123; .oficina Madrid</h5>
                                <p className="text-card-footer">
                                </p>
                                {/* <Button  className="card-button" variant="primary">Quieres una web profesional</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            
        </div>
    )
}
