import React from "react"
import { Card, CardColumns, CardDeck } from "react-bootstrap"

export default function Cards_Werk() {
  return (
    <CardColumns>
      <Card bg="light-blue" style={{ height: "12rem" }} className="sm-6 lg-4">
        <Card.Body>
          <Card.Title className="text-center"> 1. Geïsoleerd. </Card.Title>
          <Card.Text>Er is geen contact buitenshuis.</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ height: "12rem" }} className="sm-6 lg-4">
        <Card.Body>
          <Card.Title className="text-center">
            2. Sociale contacten buiten de deur.
          </Card.Title>
          <Card.Text>
            Wekelijks contact, maar niet georganiseerd contact en geen
            uitvoering taken
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ height: "12rem" }} className="sm-6 lg-4">
        <Card.Body>
          <Card.Title className="text-center">
            {" "}
            3. Deelname georganiseerde activiteiten
          </Card.Title>
          <Card.Text>
            Wekelijks contact, maar niet georganiseerd contact en geen
            uitvoering taken.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ height: "12rem" }} className="sm-6 lg-4">
        <Card.Body>
          <Card.Title className="text-center"> 4. Onbetaald werk </Card.Title>
          <Card.Text>
            Voert structureel taken uit (minimaal 1x per week) en taken hebben
            al enige economische waarde.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ height: "12rem" }} className="sm-6 lg-4">
        <Card.Body>
          <Card.Title className="text-center">
            5. Betaald werk met ondersteuning
          </Card.Title>
          <Card.Text>Bijvoorbeeld Arbeidscontract of ZZP-er.</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ height: "12rem" }} className="sm-6 lg-4">
        <Card.Body>
          <Card.Title className="text-center"> 6. Betaald werk </Card.Title>
          <Card.Text>
            Er is geen ondersteuning meer (behalve door eventueel
            gespecialiseerde jobcoaching).
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  )
}
