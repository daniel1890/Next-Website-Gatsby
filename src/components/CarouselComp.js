import React from "react"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { contentwrap } from "../styles/carousel.module.css"

export default function CarouselComp() {
  return (
    <div className="content-wrap">
      <Carousel>
        <Carousel.Item interval={5000}>
          <StaticImage
            className="d-block w-100"
            src="../images/foto-naasten-1.jpg"
            alt="logo"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <StaticImage
            className="d-block w-100"
            src="../images/foto-naasten-1.jpg"
            alt="logo"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
