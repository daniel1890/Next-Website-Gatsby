import React from "react"
import AanmeldFormulier from "../components/AanmeldFormulier"
import Layout from "../components/Layout"
import { Card, Container } from "react-bootstrap"

export default function Aanmelding() {


    return (
        <Layout>

            <Container>
                <Card className="text-center mt-4 mb-4">
                    <Card.Header as="h2">Aanmelden bij Next</Card.Header>
                    <Card.Body className="px-5">
                        <Card.Text>
                            Wil je je aanmelden bij Next? Laat je gegevens achter en wij nemen zo spoedig mogelijk contact met je op.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <AanmeldFormulier />
            </Container>
        </Layout>
    )
}