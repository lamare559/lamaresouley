import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import Logo from "../../img/NLS.png";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navigation() {
  return (
    <div>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/lamaresouley" className="brand-logo">
              NLS
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item className="mr-5">
                <NavLink
                  className="links"
                  activeClassName="is-active"
                  to="/lamaresouley"
                  exact={true}
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mr-5">
                <NavLink
                  className="links"
                  activeClassName="is-active"
                  to="/lamaresouley/my-projects"
                >
                  Projects
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mr-5">
                <NavLink
                  className="links"
                  activeClassName="is-active"
                  to="/lamaresouley/experience"
                >
                  Experience
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mr-5">
                <NavLink
                  className="links"
                  activeClassName="is-active"
                  to="/lamaresouley/education"
                >
                  Education
                </NavLink>
              </Nav.Item>
              <Nav.Item className="mr-5">
                <NavLink
                  className="links"
                  activeClassName="is-active"
                  to="/lamaresouley/contact"
                >
                  Contact
                </NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default Navigation;
