import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/fontawesome-free-regular'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import logo from '../../../../assets/img/Logo.png'; // Assuming you have a logo image

export const Header = ({ onSignInClick }) => (
    <div>
        <Navbar expand="lg" className="bg-dark px-3" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ verticalAlign: 'middle', marginRight: '2px' }}
                    />
                </Navbar.Brand>
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
                        <Button variant="primary" onClick={onSignInClick}>Sign In</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
);