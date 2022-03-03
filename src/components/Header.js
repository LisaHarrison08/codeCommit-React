import React from "react"
import header from "../assets/head.png"
import { Container } from "react-bootstrap"
import './Header.css'

function Header() {
    return (
        <header>
            <Container fluid>
                <img
                    className="background-image"
                    src={header}
                    alt="Group Coding"
                />
                <div className="banner-text">
                    <h1>Code />Commit</h1>
                </div>
            </Container>
        </header>
    )
}

export default Header;