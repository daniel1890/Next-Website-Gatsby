import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { footer } from "../styles/footer.module.css"
import { Container, Row, Col } from "react-bootstrap"

export default function Navbar() {
  return (
    <footer className={footer}>
      <Container class="container">
        <Row>
          <Col>
            <h2>Next@Work</h2>
            <p>
              Next biedt deskundige woon- en trainings trajecten voor mensen die
              zich verder willen ontwikkelen. Wij bieden een vorm van
              individuele begeleiding en beschermd wonen.
            </p>
          </Col>
          <Col>
            <h2>Colofon</h2>
            <p>
              Next@Work Simon Stevinweg 20 6827 BT Arnhem T: 06-14442893 E:
              info@nextatwork.nl
            </p>
          </Col>
        </Row>
        <Row>
          <p class="footer-text">Copyright 2021 | Daniël Codes</p>

          <a class="footer-text" href="https://github.com/daniel1890">
            <StaticImage
              class="git-logo"
              src="../images/logo_git.png"
              alt="github-logo"
              href="https://github.com/daniel1890"
              style={{ width: "25px", height: "25px" }}
            ></StaticImage>
          </a>
        </Row>
      </Container>
    </footer>
  )
}
