import React from 'react'
import imagensvg3 from '../../images/imagensvg3.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './infoSection.css'
import {Col, Container,Row,} from 'react-bootstrap'

export default function InfoSection() {
    return (
            <Container fluid  className="content-infoSection">
                <Row>
                <Col  md={6} lg={4} >
                    <div className="text-infoSection">
                        <h1>thinkcode.<h2>developers</h2></h1>
                        <p>Diseño y desarrollo de aplicaciones y páginas web para tu negocio o proyecto.<br/>
                        Disfrutamos mucho con lo que hacemos, compruébalo.</p>
                    </div>
                </Col>
                <Col  md={6} lg={8}  >
                    <img  className="imagensvg-infoSection" alt="" src={imagensvg3}></img>
                </Col>
                
            </Row>
            
            {/* <Card style={{ width: '88rem'}, {margin: '2rem' }}>
                <img  alt="" src={imagensvg3}></img>
            </Card>
            <Card style={{ width: '88rem'}, {margin: '2rem' }}>
                <img  alt="" src={imagensvg3}></img>
                <Card.Img variant="top" src={imagensvg2}/>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
         */}
        </Container >
    )
}
