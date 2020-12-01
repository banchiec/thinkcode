import React from 'react'
import imagensvg3 from '../../images/imagensvg3.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './infoSection.css'
import {Col, Container,Row,} from 'react-bootstrap'

export default function InfoSection() {
    return (
        <Container fluid className="content-infoSection">
            <Row>
                <Col >
                    <div className="text-infoSection">
                        <h1>thinkcode.developer</h1>
                        <p>pensamos en ti</p>
                    </div>
                </Col>
                <Col xs={12} >
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
