import React from 'react'
import review from '../../images/logo_thinkcode'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Button, Nav , Card, NavLink,CardImg} from 'react-bootstrap'

export default function InfoSection() {
    return (
        <div className="container jumbotron">
            <Card style={{ width: '88rem'}, {margin: '2rem' }}>
                <Card.Img variant="top" src={review} />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        
        </div>
    )
}
