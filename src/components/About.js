import React from "react"
import inspire from "../assets/inspire.png"
import { Container, Col, Row } from "react-bootstrap"

const About = () => {
    return (
        <Container fluid className="about-section">
            <Row>
                <Col xs={12} md={6}>
                    <img
                        className="about-image"
                        src={inspire}
                        alt="Person sat at a computer"
                    />
                </Col>
                <Col xs={12} md={6}>
                    <h2 id="about">About Us</h2>
                    <h4>Code Commit is an organization that...</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                    </p>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                        magnidolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                        dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                        dolore magnam aliquam quaerat voluptatem.
                    </p>
                </Col>
            </Row>

        </Container>
    )
}

export default About;