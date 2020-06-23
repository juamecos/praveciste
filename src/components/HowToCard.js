import React from "react"
import Img from "gatsby-image"
const HowToCard = ({ fluid, text }) => {
  return (
    <div className="howto__item">
      <Img className="howto__image" fluid={fluid} />
      <h3 className="howto__text">{text}</h3>
    </div>
  )
}

export default HowToCard
