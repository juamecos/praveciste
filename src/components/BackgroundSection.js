import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const imageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "arroba2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const BackgroundSection = ({ className, children, home, image }) => {
  const data = useStaticQuery(imageQuery)
  const imageData = data.desktop.childImageSharp.fluid
  console.log(imageData)

  return (
    <BackgroundImage
      // Tag="section"
      className={className}
      fluid={image || imageData}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

const StyledBackgroundSection = styled(BackgroundSection)`
  min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
  opacity: 1 !important; /* default 0.99 so filter won't work*/
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(49, 93, 85, 0.7019607843137254) 0%, rgba(219, 236, 253, 0.7) 82%, rgba(216, 216, 216, 0.7) 92%) 50% 50% / cover"
      : "none"};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  // box-shadow: 1px 1px 20px #142850;
`

export default StyledBackgroundSection
