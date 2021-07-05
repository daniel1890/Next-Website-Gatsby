import React from "react"
import { CardDeck, Card } from "react-bootstrap"
import { Link } from "gatsby"
import { contentwrap } from "../styles/cards.module.css"

export default function Cards() {
  return (
    <div className={contentwrap}>
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://nextatwork.nl/wp-content/uploads/2019/11/foto-bewoners1-1.jpg"
          />
          <Card.Body>
            <Link to="../activerend_werk">
              <Card.Title className="text-center">Voor jou</Card.Title>
            </Link>
            <Card.Text>
              Ben jij op zoek naar een rustige, maar uitdagende werkplek? Dan is
              Next@Work jouw volgende stap! Lees hier meer over wat voor werk je
              bij ons kunt doen.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://nextatwork.nl/wp-content/uploads/2019/11/foto-naasten-1.jpg"
          />
          <Card.Body>
            <Link to="../werkzaamheden">
              <Card.Title className="text-center">Over ons</Card.Title>
            </Link>
            <Card.Text>
              Wij kijken altijd naar waar jouw passies en talenten liggen. Wat
              kan je al en wat zou je graag willen leren? Samen maken we een
              plan van aanpak. Hier kan je meer lezen over ons werk, of neem
              contact met ons op voor vragen.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://nextatwork.nl/wp-content/uploads/2019/11/foto-profesionals-1.jpg"
          />
          <Card.Body>
            <Link to="../aanmelding">
              <Card.Title className="text-center">Voor verwijzers</Card.Title>
            </Link>
            <Card.Text>
              Next@Work werkt met psychologen en ervaringsdeskundigen. Wij
              bieden uitdagend activerend werk, passend bij de persoon. Lees
              hier meer over onze werkwijze, of neem contact op voor een
              oriënterend gesprek.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  )
}
