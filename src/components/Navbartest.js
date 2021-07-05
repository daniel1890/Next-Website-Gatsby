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
          <Nav.Link href="/activerend_werk">Activerend Werk</Nav.Link>
          <Nav.Link href="/werkzaamheden">Werkzaamheden</Nav.Link>
          <Nav.Link href="/begeleiding">Begeleiding</Nav.Link>
          <Nav.Link href="/aanmelding">Aanmelden</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
