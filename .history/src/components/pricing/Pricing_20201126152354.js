import React from 'react'
import './Pricing.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container, Button, Row, Col} from 'react-bootstrap'

export default function Pricing() {
    return (
        <Container fluid className ="container-pricing">
            <h1>¿Cuéntanos que desarrollo web necesitas?</h1>
            <Row>
                <Col  className="container-card">
                    <Card  className="card-pricing" >
                    <Card.Body>
                        <h2 className="title-card">Card Title</h2>
                        <p className="text-card">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </p>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col  className="container-card">
                    
                    <Card className="card-pricing">
                    <Card.Body>
                        <h2 className="title-card">Desarrollo a medida</h2>
                        <p className="text-card">
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </p>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className="container-card">
                    <Card  className="card-pricing" >
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
}
