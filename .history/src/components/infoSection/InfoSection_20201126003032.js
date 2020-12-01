import React from 'react'
import imagensvg2 from '../../images/imagensvg2.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Button, Nav , Card, NavLink,CardImg} from 'react-bootstrap'

export default function InfoSection() {
    return (
        <div className="container">
            <i  alt="" src={imagensvg2}></i>
            {/* <Card style={{ width: '88rem'}, {margin: '2rem' }}>
                <Card.Img variant="top" src={imagensvg2}/>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
        
        </div>
    )
}
