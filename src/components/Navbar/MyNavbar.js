import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { MenuItems } from "./MenuItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./MyNavbar.css"
import { MyButton } from "../MyButton/MyButton"

import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons"

function MyNavbar() {
  const [clicked, setClick] = useState(true)

  function clickMenu() {
    setClick(click => (click = !click))
  }

  return (
    <nav className="NavbarItems">
      <div className="navbar-logo0">
        <a href="/">
          <StaticImage
            className="navbar-logo"
            src="../../images/Next-logo.png"
            alt="logo"
          ></StaticImage>
        </a>
      </div>
      <div className="menu-icon" onClick={clickMenu}>
        <FontAwesomeIcon icon={faBars} size="xs"></FontAwesomeIcon>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      <MyButton>Contact</MyButton>
    </nav>
  )
}

export default MyNavbar
