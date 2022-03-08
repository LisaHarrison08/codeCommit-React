import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { faUsers, faCode, faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Info.css'

function Info() {
    return (
        <Container fluid>
            <Row>
                <h2 className="info-title">The place to:</h2>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <FontAwesomeIcon icon={faUsers} size="4x" className="fa-container" />
                    <h3 className="text-center">Connect</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sed nisi a faucibus. Donec
                        posuere, urna eget dictum fermentum, ligula eros lacinia odio, sit.</p>
                </Col>
                <Col xs={12} md={4}>
                    <FontAwesomeIcon icon={faCode} size="4x" className="fa-container" />
                    <h3 className="text-center">Code</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sed nisi a faucibus. Donec
                        posuere, urna eget dictum fermentum, ligula eros lacinia odio, sit.</p>
                </Col>
                <Col xs={12} md={4}>
                    <FontAwesomeIcon icon={faShareFromSquare} size="4x" className="fa-container" />
                    <h3 className="text-center">Collaborate</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sed nisi a faucibus. Donec
                        posuere, urna eget dictum fermentum, ligula eros lacinia odio, sit.</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Info;
