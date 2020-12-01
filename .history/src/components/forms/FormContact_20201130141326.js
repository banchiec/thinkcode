import React from 'react'
import { Container, Col, Row, Form, InputGroup,Button, FormControl } from 'react-bootstrap'

export default function FormContact() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="text-contactanos"></div>
                    </Col>
                    <Col md={8}>
                        <Form inline>
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2"
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
                    </Col>
                </Row>

            </Container>

        </div>
    )
}
