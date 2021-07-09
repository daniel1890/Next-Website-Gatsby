import React from "react"
import { CardDeck, Card, Button, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { contentwrap } from "../styles/cards.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Cards() {
  return (
    <section className="pr-5 pl-5 pt-5 pb-5">
      <CardDeck className="mt-5 mb-5">
        <Card className="rounded-0 pt-3 pl-2 pr-2 ">
          <Card.Img
            variant="top"
            src="https://nextatwork.nl/wp-content/uploads/2019/11/foto-bewoners1-1.jpg"
          />
          <Card.Body>
            <Link to="../activerend_werk">
              <Card.Title className="text-center">Voor Cliënten</Card.Title>
            </Link>
            <Card.Text>
              Ben jij op zoek naar een veilige en rustige woonomgeving die
              kleinschalig is, waar contact en betrokkenheid centraal staan? Dan
              is NEXT jouw volgende stap!
            </Card.Text>
            <Row>
              <Col className="text-center">
                <Card.Link
                  as={Button}
                  className="rounded-0 text-white btn-primary"
                  href="/contact"
                >
                  Meer Informatie
                </Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="rounded-0 pt-3 pl-2 pr-2 ">
          <Card.Img
            variant="top"
            src="https://nextatwork.nl/wp-content/uploads/2019/11/foto-bewoners1-1.jpg"
          />
          <Card.Body>
            <Link to="../activerend_werk">
              <Card.Title className="text-center">Voor Verwijzers</Card.Title>
            </Link>
            <Card.Text>
              Next werkt op basis van wetenschappelijke kennis en
              maatschappelijke inzichten om te komen tot een integraal
              zorgaanbod. Neem contact op voor een oriënterend gesprek.
            </Card.Text>
            <Row>
              <Col className="text-center">
                <Card.Link
                  as={Button}
                  className="rounded-0 text-white btn-primary"
                  href="/contact"
                >
                  Meer Informatie
                </Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="rounded-0 pt-3 pl-2 pr-2">
          <Card.Img
            variant="top"
            src="https://nextatwork.nl/wp-content/uploads/2019/11/foto-bewoners1-1.jpg"
          />
          <Card.Body>
            <Link to="../aanmelding">
              <Card.Title className="text-center">Over Ons</Card.Title>
            </Link>
            <Card.Text>
              Het contact met naasten van onze bewoners heeft voor ons een hoge
              prioriteit. Met onze collega's zijn wij 24 uur per dag bereikbaar.
              Neem contact met ons op voor vragen.
            </Card.Text>
            <Row>
              <Col className="text-center">
                <Card.Link
                  as={Button}
                  className="rounded-0 text-white btn-primary"
                  href="/contact"
                >
                  Meer Informatie
                </Card.Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </CardDeck>
    </section>
  )
}
