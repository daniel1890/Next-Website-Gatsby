import React, { Component } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { MenuItems } from "./MenuItems"
import { NavItem } from "react-bootstrap"

export default function MyNavbar() {
  return (
    <nav className="NavbarItems">
      <div className="navbar-logo" style={{ width: "250px" }}>
        <StaticImage src="../images/Next-logo.png" alt="logo"></StaticImage>
      </div>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
