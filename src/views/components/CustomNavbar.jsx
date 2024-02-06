import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

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
        <Navbar.Brand>
          <Link to="/">
            <img
              alt=""
              src="/assets/icons/F_logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/projects" className="nav-link f-l-light">
              Projects
            </Link>
            <Link to="/cv-resume" className="nav-link f-l-light">
              CV Resume
            </Link>
            <Link to="/social-media" className="nav-link f-l-light">
              Social Media
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
