import React from "react"
import Footer from "./Footer"
import "../styles/global.css"
import Navbartest from "./Navbartest"
import MyNavbar from "./Navbar/MyNavbar"
import "bootstrap/dist/css/bootstrap.min.css"

export default function Layout({ children }) {
  return (
    <div class="all">
      <Navbartest />
      <MyNavbar />
      <div class="layout mt-3">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
