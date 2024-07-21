import React from 'react';
import { Link } from 'react-router-dom';

// Import Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-blur fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/">Lou SIMON</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/about">A propos</Nav.Link>

            <Nav.Link as={Link} to="/skills">Compétences</Nav.Link>
            <Nav.Link as={Link} to="/experiences">Expériences</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
