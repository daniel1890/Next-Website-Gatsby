import React from "react"
import Layout from "../components/Layout"
import { Container, Row, Col } from "react-bootstrap"
import CarouselComp from "../components/CarouselComp"
import Cards_Index from "../components/Cards_Index"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: "center" }}>Gatsby Font Awesome example</h1>
        <div>
          <FontAwesomeIcon icon={faTimes} size="1x" />
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
      <CarouselComp />

      <Cards_Index />

      <section className="bg-secondary p-5">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md>
              <StaticImage
                className="img-fluid"
                src="../images/image_moustuin1.jpg"
              ></StaticImage>
            </Col>
            <Col md className="p-5">
              <h2>Lorem Ipsum</h2>
              <p className="lead">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
                quo sed minus illum animi ipsum similique quia possimus facere?
                Voluptatum repellat laboriosam nemo delectus at, voluptates
                tempora minus totam quia quisquam harum ipsam culpa quo odio
                mollitia! Ut, maiores? Id, tenetur explicabo autem laboriosam
                fuga eum exercitationem dolore. Minima, itaque architecto
                reprehenderit quod voluptatibus quos sint enim blanditiis ab
                consequuntur natus recusandae. Debitis officia perspiciatis
                quasi adipisci excepturi ipsa quod magni voluptates odio id
                porro ipsam accusantium cumque repudiandae veniam quisquam
                libero, deserunt in sequi cupiditate, tempora eveniet.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
