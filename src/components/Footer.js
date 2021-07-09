import React from "react"
import { footer, footertext } from "../styles/footer.module.css"
import { Container, Row, Col, Collapse } from "react-bootstrap"

export default function Footer() {
  let today = 2021

  return (
    <footer>
      <Container class="container" className={footer}>
        <div className={footertext}>
          <Row>
            <Col>
              <h4 className="mb-3">NEXT Arnhem</h4>
              <p className="">
                Next biedt deskundige woon- en trainings trajecten voor mensen
                die zich verder willen ontwikkelen. Wij bieden een vorm van
                individuele begeleiding en beschermd wonen.
              </p>
            </Col>
            <Col className="ml-5">
              <h4 className="mb-3">Service</h4>
              <ul class="list-unstyled">
                <li id="footerli">Privary verklaring NEXT</li>
                <li id="footerli">Klachtenformulier NEXT</li>
                <li id="footerli">Klachtenverslag</li>
                <li id="footerli">Klachtenreglement</li>
              </ul>
            </Col>
            <Col>
              <h4 className="mb-3">NEXT Arnhem</h4>
              <ul class="list-unstyled">
                <li id="footerli">Rosendalsestraat 414</li>
                <li id="footerli">6824 CS Arnhem</li>
                <br />
                <li id="footerli">T: 06-36353066</li>
                <li id="footerli">E: info@nextatwork.nl</li>
              </ul>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col></Col>
            <Col class="col-xs-0 col-sm-6">
              <p class="footer-text text-center">
                Copyright {today} | Daniël Codes
              </p>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}
