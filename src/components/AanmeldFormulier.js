import * as React from "react"
import { useState } from "react"
import { Container, Col, Form, Row, Button } from "react-bootstrap"

const AanmeldFormulier = () => {

    return (
        <Container fluid="lg" className="mt-5 mb-5">
            <Row>
                {/* Column voor de form */}
                <Col lg={9}>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicFirstName">
                                    <Form.Label>Voornaam</Form.Label>
                                    <Form.Control required type="text" placeholder="Jan" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Achternaam</Form.Label>
                                    <Form.Control required type="text" placeholder="Janssen" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Adress</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="JanJanssen@Jan.com"
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>Telefoonnummer</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Label>Verdere opmerkingen bij uw aanmelding</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows="3"
                                placeholder="Plaats hier wat u graag wilt vertellen"
                            />
                        </Form.Group>
                        <Button type="submit">Stuur aanmelding</Button>
                    </Form>
                </Col>

                {/* Column voor omschrijving van het form veld */}
                <Col>
                    Voer uw contact informatie in en omschrijf wat uw graag wilt
                    vertellen, wij nemen zo snel mogelijk contact op wanneer mogelijk!
                </Col>
            </Row>
        </Container>
    )
}

export default AanmeldFormulier