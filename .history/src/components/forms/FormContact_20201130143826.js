import React from 'react'
import { Container, Col, Row, Form, InputGroup,Button, FormControl } from 'react-bootstrap'

export default function FormContact() {
    return (
        <div>
            <Container >
                <Row>
                    <Col lg ={4} md={4}>
                        <div className="text-contactanos text-white">
                            Contactanos
                        </div>
                    </Col>
                    <Col lg={8} className ="container-form" md={8}>
                        <Form inline>
                            <Form.Label htmlFor="inlineFormInputName2" className="" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-5 ml-5"
                                id="inlineFormInputName2"
                                placeholder="Jane Doe"
                            />
                            <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                                Username
                            </Form.Label>
                            <InputGroup className="mb-2 mr-sm-2">
                                <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroupUsername2" placeholder="Username" />
                            </InputGroup>
                            <Button type="submit" className="mb-2">
                                Submit
                            </Button>
                        </Form>
                        <Form inline>
                            <Form.Label htmlFor="inlineFormImputName3" srOnly>
                                phone 
                            </Form.Label>
                            <Form.Control
                                id="inlineFormImputName3"
                                placeholder="+34 617982536"
                            />
                            <Form.Label htmlFor="inlineFormInputGroupUsername3" srOnly>
                                Web & comentarios
                            </Form.Label>
                            <InputGroup className="mb-2 mr-sm-2 ml-5">
                                <InputGroup.Prepend>
                                <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl id="inlineFormInputGroupUsername3" placeholder="Web & comentarios" />
                            </InputGroup>

                        </Form>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}
