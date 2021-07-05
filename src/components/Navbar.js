import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <StaticImage src="../images/logo-nextwork2-1.png" alt="logo" />
        </Link>
      </div>
      <div className="links">
        <Link to="../">Activerend Werk</Link>
        <Link to="/">Werkzaamheden</Link>
        <Link to="/">Begeleiding</Link>
        <Link to="/">Aanmeldformulier</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  )
}
