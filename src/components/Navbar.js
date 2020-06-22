import React from "react"
import { useState } from "react"
import { FaAlignJustify } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// import loadable from "@loadable/component"

const Navbar = ({ data }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  const navLinksClass = isOpen ? `navbar__links show-nav` : `navbar__links`

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__header">
          <AniLink activeClassName="active" fade to={"/"} alt={`Link to uvos`}>
            {<div className="navbar__logo">{data.site.siteMetadata.logo}</div>}
          </AniLink>
          <button
            type="button"
            className="navbar__mobile--menu"
            onClick={toggleNav}
            alt="menu button"
          >
            <div className="navbar__mobile--text">MENÚ</div>
            <FaAlignJustify className="navbar__mobile--icon" />
          </button>
        </div>
        <ul className={navLinksClass}>
          {data.site.siteMetadata.menuLinks.map((item, index) => {
            return (
              <li
                key={index}
                className="navbar__link"
                alt={`Link to ${item.name}`}
              >
                <AniLink
                  activeClassName="active"
                  fade
                  to={item.link}
                  alt={`Link to ${item.name}`}
                >
                  {item.name}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
