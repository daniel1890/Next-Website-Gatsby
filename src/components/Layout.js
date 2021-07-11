import React from "react"
import Footer from "./Footer"
import "../styles/global.css"
import Navbartest from "./Navbartest"
import MyNavbar from "../components/Navbar/MyNavbar"

export default function Layout({ children }) {
  return (
    <div class="all">
      <MyNavbar />
      <div class="layout mt-3">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}
