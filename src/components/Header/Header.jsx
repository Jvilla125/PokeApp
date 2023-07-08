import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-warning justify-content-between">
      <Container fluid>
        <div className="ms-3">
          <Nav.Link href="/">Home</Nav.Link>
        </div>
        <div>
          Pokeapp
        </div>
        <div className="me-3">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav className="d-flex">
                <Row xs="auto">
                  <Col><p><Nav.Link href="/findpokemon">Find Pokemon</Nav.Link></p></Col>
                  <Col><p><Nav.Link to="/myteam">My Team</Nav.Link></p></Col>
                  <Col><p><Nav.Link to="/login">Login</Nav.Link></p></Col>
                  <Col><p><Nav.Link to="/signup">Signup</Nav.Link></p></Col>
                </Row>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;

{/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Nav className="d-flex">
            <div>
              <h2>PokeApp</h2>
            </div>
            <Row>
              <Col md={5}>
                <p><Link to="/login">Login</Link></p>
              </Col>
              <Col md={5}>
                <p><Link to="/signup">Signup</Link></p>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}