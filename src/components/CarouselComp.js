import React from "react"
import { Carousel } from "react-bootstrap"
import { StaticImage } from "gatsby-plugin-image"
import { fullwidthcarousel } from "../styles/carousel.module.css"

export default function CarouselComp() {
  return (
    <Carousel className={fullwidthcarousel}>
      <Carousel.Item interval={5000}>
        <StaticImage
          className="d-block w-100"
          height={450}
          src="../images/foto1.png"
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
          height={450}
          src="../images/foto2.png"
          alt="logo"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <StaticImage
          className="d-block w-100"
          height={450}
          src="../images/foto3.png"
          alt="logo"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <StaticImage
          className="d-block w-100"
          height={450}
          src="../images/foto4.png"
          alt="logo"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={5000}>
        <StaticImage
          className="d-block w-100"
          height={450}
          src="../images/foto5.png"
          alt="logo"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
