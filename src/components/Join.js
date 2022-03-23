import React from "react"
import Form from 'react-bootstrap/Form'
import { Button, Container, Col, Row } from "react-bootstrap"
// import './Join.css'

const Join = () => {
    return (
        <Container fluid className="form--container" id="join">
            <h1>Join our coding community! Get in touch:</h1>
            <Form>
                <Row className="form-group">
                    <Col md={2}>
                        <Form.Label>First Name:</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control type="text" placeholder="First Name" />
                    </Col>
                </Row>

                <Row className="form-group">
                    <Col md={2}>
                        <Form.Label>Last Name:</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control type="text" placeholder="Last Name" />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={2}>
                        <Form.Label>Email:</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={2}>
                        <Form.Label>Tell us about yourself</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control type="text" placeholder="How long have you been coding? What programming languages excite you?" />
                    </Col>
                </Row>

                <Row controlId="formBasicCheckbox">
                    {/* <Col md={2}>
                        <Form.Check type="checkbox" label="Check me out" />
                    </Col> */}
                    <Col md={8}>
                        <Button variant="custom" size="sm" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container >
    )
}

export default Join;