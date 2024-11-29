import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { FiCamera } from "react-icons/fi";

const AppNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <FiCamera className="me-2" />
          Untitled UI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-3">
            <Nav.Link href="#">Home</Nav.Link>

            <NavDropdown title="Products" id="products-dropdown">
              <NavDropdown.Item href="#">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Product 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Product 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item href="#">Resource 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Resource 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Resource 3</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC1l6fbVIlb9dXMPu06Tnl5wO-v_cEi2a2Yw&s"
            roundedCircle
            className="ms-auto"
            alt="Profile"
            width="40"
            height="40"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
