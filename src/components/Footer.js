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
              <h4 class="text-center">Next@Work</h4>
              <p>
                Next biedt deskundige woon- en trainings trajecten voor mensen
                die zich verder willen ontwikkelen. Wij bieden een vorm van
                individuele begeleiding en beschermd wonen.
              </p>
            </Col>
            <Col>
              <h4>Colofon</h4>
              <ul class="list-unstyled">
                <li id="footerli">Next@Work</li>
                <li id="footerli">Simon Stevinweg 20</li>
                <li id="footerli">6827 BT Arnhem</li>
                <li id="footerli">T: 06-14442893</li>
                <li id="footerli">E: info@nextatwork.nl</li>
              </ul>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col></Col>
            <Col class="col-xs-0 col-sm-6">
              <p class="footer-text text-center">Copyright {today} | Daniël Codes</p>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}
