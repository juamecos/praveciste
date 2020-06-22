import PropTypes from "prop-types"
import React from "react"
import Navbar from "./Navbar"

const Header = ({ data }) => (
  <header>
    <div>
      <Navbar data={data} />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
