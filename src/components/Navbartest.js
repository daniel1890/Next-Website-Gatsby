import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

export default function Navbartest() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparant" variant="light">
      <Navbar.Brand>
        <div className="logo">
          <Link to="/">
            <StaticImage src="../images/logo-nextwork2-1.png" alt="logo" />
          </Link>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Activerend Werk</Nav.Link>
          <Nav.Link>Werkzaamheden</Nav.Link>
          <Nav.Link>Begeleiding</Nav.Link>
          <Nav.Link>Aanmelden</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
