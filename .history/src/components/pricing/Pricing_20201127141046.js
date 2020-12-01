import React, { useEffect } from 'react'
import './Pricing.css'
import imagen_desarrollo_a_medida from '../../images/imagen_desarrollo_a_medida.svg'
import imagensvg4 from '../../images/imagensvg4.svg'
import imagen_code_thinking from '../../images/image_code_thinking.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card, Container, Button, Row, Col} from 'react-bootstrap'

export default function Pricing() {
   

    // useEffect(()=>{
    //     controlScroll()
    // })

    const controlScroll = () => {
        let bandera = false
        window.onscroll = ()=>{
            if(window.scrollY > 450 && !bandera){
                console.log(window.scrollY)
                bandera = true 
            }
            return true
        }

    }

    console.log(controlScroll())
    return (
        <Container fluid className ="container-pricing">
                <h1 className="text-propuesta animate__animated ">Conoce nuestros servicios</h1>
            <Row>
                <Col  className="container-card">

                        <Card className= {controlScroll() ? "animate__animated animate__fadeInLeft card-pricing": "card-princing"} >
                    {/* <Card  className="animate__animated animate__fadeInLeft card-pricing" > */}
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
                <Col  className="container-card">
                    
                    <Card className="card-pricing">
                        <Card.Img className="image-pricing"variant ="top" src={imagen_desarrollo_a_medida}></Card.Img>
                    <Card.Body>
                        <h2 className="title-card">&#123;  Desarrollo a medida</h2>
                        <p className="text-card">
                            Creamos aplicaciones web a tu medida para que multipliques tu productividad.<br/>
                            Y olvidate de los softwares comerciales que no encajan con tu negocio.
                        </p>
                        <Button className="card-button" variant="primary">Quieres un desarrollo a medida</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col className="container-card">
                    <Card  className=" animate__animated animate__fadeInRight card-pricing" >
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
