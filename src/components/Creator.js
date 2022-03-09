import React from "react"
import work from "../assets/work.png"
import woyou from "../assets/woyou.png"
import computer from "../assets/computer.png"
import { Container, Col, Row } from "react-bootstrap"



const Creator = () => {
    return (
        <Container className="creator-space">
            <Row className="creator-title">
                <h2>Creator Space</h2>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <img
                        className="creator-image"
                        src={work}
                        alt="Person sat at a computer"
                    />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sed nisi a faucibus. Donec
                        posuere, urna eget dictum fermentum, ligula eros lacinia odio, sit.</p>
                </Col>
                <Col xs={12} md={4}>
                    <img
                        className="creator-image"
                        src={woyou}
                        alt="Person sat at a computer"
                    />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sed nisi a faucibus. Donec
                        posuere, urna eget dictum fermentum, ligula eros lacinia odio, sit.</p>
                </Col>
                <Col xs={12} md={4}>
                    <img
                        className="creator-image"
                        src={computer}
                        alt="Person sat at a computer"
                    />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum sed nisi a faucibus. Donec
                        posuere, urna eget dictum fermentum, ligula eros lacinia odio, sit.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Creator;
