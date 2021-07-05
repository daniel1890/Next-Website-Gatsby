import React from "react"
import Layout from "../components/Layout"
import { Container } from "react-bootstrap"
import { content } from "../styles/index.module.css"
import CarouselComp from "../components/CarouselComp"
import Cards_Index from "../components/Cards_Index"

export default function Home() {
  return (
    <Layout>
      <div className="page-container">
        <div className="content-wrap">
          <Container>
            <CarouselComp />
            <div className={content}>
              <h3 className="text-center">Update: Corona Maatregelen</h3>
              <p>
                Wij zijn inmiddels weer geopend, maar wel met aanpassingen: Voor
                onze locatie geldt de 1,5 meter regel. Wij verwachten dat
                iedereen de afstand bewaart. Hiervoor hanteren wij een maximum
                aantal personen in elke ruimte, en bij de lunch. Ook willen wij
                vooraf precies weten wanneer je komt. Bij klachten blijf je
                thuis en wordt er via telefoon contact gehouden. Bij binnenkomst
                dienen de handen gedesinfecteerd te worden en dient het
                werkoppervlak schoongemaakt te worden. Hier zijn materialen voor
                aanwezig. Zo houden we het voor iedereen veilig en gezond. NEXT
                biedt deskundige woon- en trainingstrajecten voor mensen die
                zich verder willen ontwikkelen. Wij bieden een vorm van
                individuele begeleiding en beschermd wonen die intensief is waar
                nodig en op afstand indien gewenst. Dit alles doen wij in een
                omgeving waar persoonlijk contact centraal staat. Samen richten
                wij ons op het ontwikkelen van jouw leven in een richting waar
                jij tevreden over bent. Als centraal doel hebben wij daarin het
                vergroten van jouw zelfstandigheid. We kijken graag naar jou
                kwaliteiten en helpen je bij dingen die je moeilijk vindt.
                Tevens vragen wij jou om na te denken wat jij voor ons, of voor
                anderen, kunt betekenen?
              </p>
            </div>
            <Cards_Index />
          </Container>
        </div>
      </div>
    </Layout>
  )
}
