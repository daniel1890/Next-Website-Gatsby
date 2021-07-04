import React from "react"
import Layout from "../components/Layout"
import { Container } from "react-bootstrap"
import { content } from "../styles/index.module.css"

export default function Home() {
  return (
    <Layout>
      <div class="page-container">
        <div class="content-wrap">
          <Container>
            <div className={content}>
              <h3>Update: Corona Maatregelen</h3>
              <p>
                Wij zijn inmiddels weer geopend, maar wel met aanpassingen: Voor
                onze locatie geldt de 1,5 meter regel. Wij verwachten dat
                iedereen de afstand bewaart. Hiervoor hanteren wij een maximum
                aantal personen in elke ruimte, en bij de lunch. Ook willen wij
                vooraf precies weten wanneer je komt. Bij klachten blijf je
                thuis en wordt er via telefoon contact gehouden. Bij binnenkomst
                dienen de handen gedesinfecteerd te worden en dient het
                werkoppervlak schoongemaakt te worden. Hier zijn materialen voor
                aanwezig. Zo houden we het voor iedereen veilig en gezond.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}
