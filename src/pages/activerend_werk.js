import React from "react"
import { Card, CardColumns, CardDeck } from "react-bootstrap"
import Layout from "../components/Layout"
import Cards_Werk from "../components/Cards_Werk"

export default function Activerend_Werk() {
  return (
    <Layout>
      <h2 className="text-center py-2">Activerend Werk</h2>
      <p className="text-center">
        De participatieladder, die gebruikt wordt bij activerend werk, bestaat
        uit 6 tredes. Deze tredes zijn:
      </p>
      <Cards_Werk />
      <p>
        Binnen Activerend werk heb je zogenoemde stabiele trajecten en
        ontwikkelingstrajecten. We zullen hieronder kort uitleggen wat het
        verschil is tussen deze twee soorten trajecten.
      </p>
      <h3>Stabiel Traject</h3>
      <p>
        Een stabiel traject houdt in dat je voor een bepaalde tijd, tot maximaal
        2 jaar, op dezelfde trede blijft. Dit kan bijvoorbeeld verstandig zijn
        als een hogere trede nog niet haalbaar lijkt. We gaan dan samen met jou,
        je begeleider en wijkcoach kijken hoe je structuur kunt opbouwen en je
        binnen deze trede verder wilt ontwikkelen.
      </p>

      <h3>Ontwikkeltraject</h3>
      <p>
        Een ontwikkeltraject houdt in dat je van de ene naar de andere trede
        gaat. Dit duurt in principe 6 maanden en kan nog een keer verlengd
        worden met 6 maanden. De bedoeling is dat we samen een plan opstellen,
        waarin we doelen stellen waarmee je naar een volgende trede kunt gaan.
        Je hoeft niet op trede 1 te beginnen. Je kunt bijvoorbeeld al op trede 3
        staan voordat je bij ons aan de slag gaat. Wij begeleiden je dan door
        naar trede vier. Vanuit hier kan je dan doorstromen naar de volgende
        trede.
      </p>

      <h3>Moet ik dan al binnen 6 maanden betaald werken?</h3>
      <p>
        Op een hogere trede beginnen klinkt soms eng, omdat wanneer je begint
        met dit traject nog helemaal niet het gevoel hebt klaar te zijn voor
        betaald werk. Maar misschien is het na een ontwikkeltraject wel
        verstandig om juist even een stabiel traject in te gaan. Wij kijken
        altijd naar wat goed bij jou zou passen. Het kan dus zijn dat je op een
        lagere trede binnen komt. Of dat het juist zo goed gaat dat je al eerder
        zou kunnen doorstromen. Hierover praten we altijd samen met jou, je
        begeleider en je wijkcoach. Natuurlijk gebeurt er niets zonder dat jij
        hier mee akkoord gaat. Jij moet altijd zelf toestemming geven voordat er
        een traject gestart wordt of je naar een volgend traject zou gaan.
      </p>

      <h3>Wat betekent zo’n trede nou eigenlijk?</h3>
      <p>
        De trede zegt niet veel over hoe goed je aan het werk bent, of hoe vaak
        je zal komen. Wel zegt het iets over de verantwoordelijkheden die je
        krijgt, de werkdruk of hoeveel tijd en ruimte je krijgt voor de
        opdrachten en persoonlijke ontwikkeling. Ook hoort bij een lagere trede
        wat meer ondersteuning en begeleiding. Wij kijken altijd naar jouw
        persoonlijke situatie. Dan praten we met jou,je begeleider en wijkcoach
        om te kijken wat voor jou fijn is en bij je past. Natuurlijk kan je ook
        altijd vrijblijvend een gesprek aanvragen, om even een kijkje te nemen
        of een dagje mee te lopen! Hier kun je meer lezen over onze
        werkzaamheden, en hier meer over de begeleiding die wij zoal bieden.
      </p>
    </Layout>
  )
}
