import React from "react"
import { Nav, Navbar } from "react-bootstrap"
// import './Nav.css';

function Navigation() {
    return (
        <nav>
            <Navbar className="justify-content-center" fixed="top">
                    <Nav.Link href="/home" className="nav-home">Home</Nav.Link>
                    <Nav.Link href="#what-we-do" className="nav-items">What we do</Nav.Link>
                    <Nav.Link href="#about" className="nav-items">About</Nav.Link>
                    <Nav.Link href="#work-space" className="nav-items">Creator space</Nav.Link>
                    <Nav.Link href="#join" className="nav-items">Contact</Nav.Link>
            </Navbar>
        </nav>
    )
}

export default Navigation;