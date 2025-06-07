import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/fontawesome-free-regular'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-dark px-3" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <NavDropdown title="Pages" id="casestudies-dropdown">
                                <NavDropdown.Item href="#">Study 1</NavDropdown.Item>
                                <NavDropdown.Item href="#">Study 2</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#"><FontAwesomeIcon icon={faSun} /></Nav.Link>
                            <Button variant="primary" as={Link} to="/signin">Signin</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="text-center my-5 py-5">
                <h1 className="display-4 fw-bold">
                    Unleash the potential of <span style={{ color: '#00FFAA' }}>AI</span> and <span style={{ color: '#FFD700' }}>machine</span> learning
                </h1>
                <p className="mt-3 lead" style={{ maxWidth: '600px', margin: 'auto' }}>
                    Machine learning algorithms build a model based on sample data, known as training data, in order to make predictions or decisions...
                </p>

                <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
                    <Button variant="primary" size="lg">Get Started</Button>
                </div>
            </Container>
        </div>
    );
}

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
        </div>
    );
}

const KeyFeatures = () => {
    return (
        <div>
            <h1>KeyFeatures</h1>
        </div>
    );
}

const Prices = () => {
    return (
        <div>
            <h1>Prices</h1>
        </div>
    );
}

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
}

export function Home() {
    return (
        <div className="App">
            <Header />
            <AboutUs />
            <KeyFeatures />
            <Prices />
            <Footer />
        </div>
    );
}