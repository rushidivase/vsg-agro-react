import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/images/vsg-l.png" style={{ maxWidth: '60px', height: 'auto' }} alt="Logo" />
        </Navbar.Brand>

        <h5 className="mb-0 main-heading">VSG Agro Equipments</h5>

        <Navbar.Toggle aria-controls="navbarNav" className="ms-auto" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto"> {/* Centered Links */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <Form className="d-flex me-3">
            <FormControl
              type="search"
              placeholder="Search Product"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>

          <Nav>
            <Nav.Link href="#">
              <img src="/images/cart-logo.jpg" alt="Cart" width="40" height="40" />
            </Nav.Link>
            <Nav.Link href="#">
              <img src="/images/user-logo.jpg" alt="User" width="40" height="40" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
