import React from 'react'
import './Pricing.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container, Button, Row, Col} from 'react-bootstrap'

export default function Pricing() {
    return (
        <Container fluid className ="container-pricing">
            <h1>¿Cuéntanos que desarrollo web necesitas?</h1>
            <Row>
                <Col className="card-pricing">
                    <Card style={{ width: '24rem' },{height: '49rem'}}>
                    <Card.Body>
                        <Card.Title>Web Coorporativa</Card.Title>
                        <Card.Text>
                        Una web profesional adaptada a todos los dispositivos
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className="card-pricing">
                    
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
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
                <Col  className="card-pricing">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
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
