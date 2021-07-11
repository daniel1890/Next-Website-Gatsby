import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Navbar, Nav, Button } from "react-bootstrap"

export default function Navbartest() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="transparant" variant="light">
      <Navbar.Brand>
        <div style={{ width: "250px" }}>
          <Link to="/">
            <StaticImage src="../images/Next-logo.png" alt="logo" />
          </Link>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/activerend_werk">
            Over Ons
          </Nav.Link>
          <Nav.Link as={Link} to="/werkzaamheden">
            Cliënten
          </Nav.Link>
          <Nav.Link as={Link} to="/begeleiding">
            Verwijzers
          </Nav.Link>
          <Nav.Link as={Link} className="mr-4" to="/aanmelding">
            Rooster
          </Nav.Link>
          <Nav.Link className="ml-4">0636353066</Nav.Link>
          <Nav.Link
            as={Button}
            className="rounded-0 text-white btn-warning mr-3"
            href="/contact"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
