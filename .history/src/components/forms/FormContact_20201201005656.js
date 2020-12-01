import React from 'react'
import './FormContact.css'
import { Container, Col, Row, Form, InputGroup,Button, FormControl } from 'react-bootstrap'

export default function FormContact() {
    return (
        <div className ="container-formContact">
            <Container fluid >
                <Row>
                    <Col lg ={4} md={4}>
                        <div className="text-contactanos">
                           <h1 className= "display-3">Contáctanos</h1> 
                        </div>
                    </Col>
                    <Col lg={8} className ="container-form" md={8}>
                        <Form inline className="form-inline">
                            <Form.Label htmlFor="inlineFormInputName2" className="" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-5 ml-5"
                                id="inlineFormInputName2"
                                placeholder="Marie"
                            />
                            <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                                email
                            </Form.Label>
                            <InputGroup className="mb-2 mr-sm">
                                <InputGroup.Prepend>
                                {/* <InputGroup.Text>@</InputGroup.Text> */}
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroupUsername2" placeholder="email" />
                            </InputGroup>
                        </Form>
                        <Form inline className="form-inline">
                            <Form.Label htmlFor="inlineFormImputName3" srOnly>
                                phone 
                            </Form.Label>
                            <Form.Control
                                className="ml-5 "
                                id="inlineFormImputName3"
                                placeholder="+34 617982536"
                            />
                            <Form.Label htmlFor="inlineFormInputGroupUsername3" srOnly>
                                Web & comentarios
                            </Form.Label>
                            <InputGroup className="mb-2 mt-2 mr-sm-2 ml-5">
                                <InputGroup.Prepend>
                                {/* <InputGroup.Text>@</InputGroup.Text> */}
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroupUsername3" placeholder="Web & comentarios" />
                            </InputGroup>
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                            <Form inline className="form-inline-check">
                                <Form.Check 
                                    type="checkbox"
                                    id="acceptConditions"
                                    className = "check-conditions mb-2 mr-0"
                                    label = " Acepto la politica de privacidad text white">
                                </Form.Check>
                            </Form>
                        </Form>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}
