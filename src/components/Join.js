import React, { useState } from "react"
// axios is similar to the native JavaScript Fetch API.
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import { Button, Container, Col, Row } from "react-bootstrap"
// import './Join.css'

const Join = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        // preventDefault - prevents browser refresh
        e.preventDefault()
        axios.post("http://localhost:5000/subscribe", { firstname, lastname, email, text }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <Container fluid className="form--container" id="join">
            <h1>Join our coding community! Get in touch:</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="form-group">
                    <Col md={2}>
                        <Form.Label>First Name:</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control type="text" onChange={(e) =>
                            setFirstname(e.target.value)} value={firstname} placeholder="First Name" />
                    </Col>
                </Row>

                <Row className="form-group">
                    <Col md={2}>
                        <Form.Label>Last Name:</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control onChange={(e) =>
                            setLastname(e.target.value)} value={lastname} type="text" placeholder="Last Name" />
                    </Col>
                </Row>
                <Row className="form-group">
                    <Col md={2}>
                        <Form.Label>Email:</Form.Label>
                    </Col>
                    <Col md={8}>
                        <Form.Control onChange={(e) =>
                            setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
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
                        <Form.Control onChange={(e) =>
                            setText(e.target.value)} value={text} as="textarea" maxLength="200" rows="2" placeholder="How long have you been coding? What programming languages excite you?" />
                    </Col>
                </Row>

                <Row>
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