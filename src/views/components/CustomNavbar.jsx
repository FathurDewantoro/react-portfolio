import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";

function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="md"
      className={isScrolled ? "bg-blur sticky-top py-3" : "py-3"}
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/src/assets/icons/F_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-item f-l-light" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="navbar-item f-l-light" href="/cv-resume">
              CV Resume
            </Nav.Link>
            <Nav.Link className="navbar-item f-l-light" href="/social-media">
              Social Media
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
