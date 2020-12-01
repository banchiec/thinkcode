import React, { useEffect } from 'react'
import './Pricing.css'
import imagen_desarrollo_a_medida from '../../images/imagen_desarrollo_a_medida.svg'
import imagensvg4 from '../../images/imagensvg4.svg'
import imagen_code_thinking from '../../images/image_code_thinking.svg'
import WOW from 'wowjs'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container, Button, Row, Col} from 'react-bootstrap'

export default function Pricing() {
     

    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    })

 
    return (
        <Container fluid className ="container-pricing">
                <h1 className="text-propuesta animate__animated ">Conoce nuestros servicios</h1>
            <Row>
                <Col md={3} className="container-card card-left">

                    <Card  className=" wow animate__animated animate__fadeInLeft card-pricing " data-wow-delay="10"  >
                        <Card.Img className="image-pricing" variant ="top" src={imagensvg4}></Card.Img>
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
                <Col md={3} className="container-card">
                    
                    <Card className="card-pricing">
                        <Card.Img className="image-pricing"variant ="top" src={imagen_desarrollo_a_medida}></Card.Img>
                    <Card.Body>
                        <h2 className="title-card">&#123;  Desarrollo a medida</h2>
                        <p className="text-card">
                            Creamos aplicaciones web a tu medida para que multipliques tu productividad.<br/>
                            Y olvidate de los softwares comerciales que no encajan con tu negocio.
                        </p>
                        <Button className="card-button" variant="primary">Quieres desarrollo a medida</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="container-card">
                    
                    <Card className="card-pricing ">
                        <Card.Img className="image-pricing"variant ="top" src={imagen_desarrollo_a_medida}></Card.Img>
                    <Card.Body>
                        <h2 className="title-card">&#123;  Desarrollo a medida</h2>
                        <p className="text-card">
                            Creamos aplicaciones web a tu medida para que multipliques tu productividad.<br/>
                            Y olvidate de los softwares comerciales que no encajan con tu negocio.
                        </p>
                        <Button className="card-button" variant="primary">Quieres Desarrollo a medida</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="container-card card-right">
                    <Card  className="wow  animate__animated animate__fadeInRight card-pricing"  data-wow-delay="10">
                        <Card.Img className="image-pricing" variant ="top" src={imagen_code_thinking}></Card.Img>
                    <Card.Body>
                        <h2 className="title-card">&#123; Marketing</h2>
                        <p className="text-card">
                            Porque no quieres salir 1º en Google, tu lo que quieres es vender. <br/>

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
