import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Logo, Underline } from "./Helpers";

export default function NavBar() {
  return (
    <Navbar
      expand="lg"
      style={{
        position: "absolute",
        background: "rgba(255, 255, 255, 1)",
        width: "100%",
        zIndex: "100"
      }}
    >
      <Navbar.Brand
        href="#landing"
        style={{
          // fontFamily: 'Courier New, Monospace',
          fontSize: "1.5rem"
        }}
      >
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#landing">Home</Nav.Link>
          <Nav.Link href="#about-me">About Me</Nav.Link>
          <Nav.Link href="#my-projects">Projects</Nav.Link>
          <Nav.Link href="#contact-me">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
