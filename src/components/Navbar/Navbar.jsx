import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

//Parent

export default function navbar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-danger mx-4" : "mx-4"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/abouteMe"
                className={({ isActive }) =>
                  isActive ? "text-danger mx-4" : "mx-4"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-danger mx-4" : "mx-4"
                }
              >
                Log in
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
