import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"
import { StaticImage } from "gatsby-plugin-image"
import Navbartest from "./Navbartest"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children }) {
  return (
    <div class="all">
      <div class="layout">
        <Navbartest />
        <hr class="full-width"></hr>
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
