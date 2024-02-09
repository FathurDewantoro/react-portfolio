import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

class scrollHelper {
  useIsBack() {
    const location = useLocation();
    const [isBack, setIsBack] = useState(false);

    useEffect(() => {
      setIsBack(sessionStorage[location.pathname + "_key"] === location.key);
      sessionStorage[location.pathname + "_key"] = location.key;
    }, [location]);

    return isBack;
  }
}

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
          <a href="/">
            <img
              alt=""
              src="/assets/icons/F_logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <a href="/projects" className="nav-link f-l-light">
              Projects
            </a>
            <a
              target="_blank"
              className="nav-link f-l-light"
              href="/assets/cv/CV_2024.pdf"
            >
              CV Resume
            </a>
            <a
              className="nav-link f-l-light"
              href="mailto:fathurtiasdewantoro@gmail.com?subject=Tawaran%20Kerjasama"
              target="_blank"
            >
              Contact Me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
