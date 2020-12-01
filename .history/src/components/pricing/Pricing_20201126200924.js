import React from 'react'
import './Pricing.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container, Button, Row, Col} from 'react-bootstrap'

export default function Pricing() {
    return (
        <Container fluid className ="container-pricing">
            <h1 className="text-propuesta">Conoce nuestros servicios</h1>
            <Row>
                <Col  className="container-card">
                    <Card  className="card-pricing" >
                    <Card.Body>
                        <h2 className="title-card">Web coorporativa</h2>
                        <p className="text-card">
                            Una web profesional, adaptada a todos los dispositivos, fácilmente administrable y optimizada para lograr un buen posicionamiento.
                            <br/><br/>Lista para lograr resultados desde el primer momento
                        </p>
                        <Button  className="card-button" variant="primary">Quieres una web profesional</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col  className="container-card">
                    
                    <Card className="card-pricing">
                    <Card.Body>
                        <h2 className="title-card">Desarrollo a medida</h2>
                        <p className="text-card">
                            Creamos aplicaciones web a tu medida para que multipliques tu productividad.<br/>
                            Y olvidate de los softwares comerciales que no encajan con tu negocio.
                        </p>
                        <Button className="card-button" variant="primary">Quieres un desarrollo a medida</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className="container-card">
                    <Card  className="card-pricing" >
                    <Card.Body>
                        <h2 className="title-card">&#123; Marketing</h2>
                        <p className="text-card">
                            Porque no quieres salir 1º en Google, tu lo que quieres es vender. <br/><br/>

                            Nuestro marketing es diferente, no prometemos resultados imposibles, pero si 
                            trabajo duro y experiencia. En nuestro método de marketing, tú tambien juegas.                        </p>
                        <Button  className="card-button" variant="primary">Quieres que te asesoremos</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    )
}
