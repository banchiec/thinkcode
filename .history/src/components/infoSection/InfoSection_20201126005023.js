import React from 'react'
import imagensvg3 from '../../images/imagensvg3.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Col,Container, Row, Card, NavLink,CardImg} from 'react-bootstrap'

export default function InfoSection() {
    return (
        <Container>
            <Row>
                <Col>
                    <img  alt="" src={imagensvg3}></img>
                </Col>
                <Col xs={8}>
                    <img  alt="" src={imagensvg3}></img>
                </Col>
                
            </Row>
            
            <Card style={{ width: '88rem'}, {margin: '2rem' }}>
                <img  alt="" src={imagensvg3}></img>
            </Card>
            <Card style={{ width: '88rem'}, {margin: '2rem' }}>
                <img  alt="" src={imagensvg3}></img>
                {/* <Card.Img variant="top" src={imagensvg2}/>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body> */}
            </Card>
        
        </Container>
    )
}
