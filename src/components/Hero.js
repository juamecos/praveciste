import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Hero = ({ data }) => {
  const { heroImage } = useStaticQuery(getHeroImage)
  return (
    <div className="hero">
      <div className="hero__row">
        <div className="hero__left">
          <div className="hero__inner">
            <h1 className="hero__text">Dokonalí řešení pro váš domov</h1>
            <h2 className="hero__info">
              Protože si zasloužíte dýchat. Čas čistý dům, zdravý dům
            </h2>
            <AniLink
              fade
              to="/kontakt"
              alt="Tlačítko pro kontaktování stránky"
              className="btn btn--cta"
            >
              Zdarma odhad
            </AniLink>
          </div>
        </div>
        <div className="hero__right">
          <Img fluid={heroImage.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default Hero

export const getHeroImage = graphql`
  query heroImage {
    heroImage: file(relativePath: { eq: "girl-1200x1200.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 950) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
