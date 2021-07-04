import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { footer } from "../styles/footer.module.css"
import { Container, Row, Col } from "react-bootstrap"

export default function Navbar() {
  let today = 2021

  return (
    <footer>
      <Container class="container" className={footer}>
        <Row>
          <Col>
            <h3>Next@Work</h3>
            <p>
              Next biedt deskundige woon- en trainings trajecten voor mensen die
              zich verder willen ontwikkelen. Wij bieden een vorm van
              individuele begeleiding en beschermd wonen.
            </p>
          </Col>
          <Col>
            <h3>Colofon</h3>
            <ul class="list-unstyled">
              <li>Next@Work</li>
              <li>Simon Stevinweg 20</li>
              <li>6827 BT Arnhem</li>
              <li>T: 06-14442893</li>
              <li>E: info@nextatwork.nl</li>
            </ul>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <Col></Col>
          <Col className="col-xs-0 col-sm-6">
            <p class="footer-text">Copyright {today} | Daniël Codes</p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </footer>
  )
}
