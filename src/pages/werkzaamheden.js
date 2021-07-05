import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import Video from "../components/Video"

const Werkzaamheden = () => {

    return (
        <Layout>
            <Container>
                <h2 className="text-center mt-4 mb-4">Onze Werkzaamheden</h2>
                <p>Bij ons kan je veel verschillende werkzaamheden doen. Wij bieden onder meer de volgende werkzaamheden aan</p>

                <Row>
                    <Col>
                        <ul>
                            <li>Fotografie</li>
                            <li>Videografie</li>
                            <li>Apps Maken</li>
                            <li>Web Design</li>
                            <li>Cursussen</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Grafische Vormgeving</li>
                            <li>Hardware</li>
                            <li>Videobewerking</li>
                            <li>Fotobewerking</li>
                            <li>En nog veel meer...</li>
                        </ul>
                    </Col>
                </Row>

                <h3 class="text-center mt-4 mb-4">Neem eens een kijkje!</h3>
                <p>
                    Natuurlijk ben je altijd van harte welkom om eens een kijkje te komen nemen, of een dagje mee te draaien. Ben je nu al nieuwschierig? Dan kun je via onderstaand filmpje alvast een indruk krijgen van wat we allemaal doen.
                </p>
                <Video
                    videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    videoTitle="Official Music Video on YouTube"
                />
            </Container>
        </Layout>
    )
}

export default Werkzaamheden;