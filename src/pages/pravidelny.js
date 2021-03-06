import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

import BackgroundSection from "../components/BackgroundSection"
import PriceTable from "../components/Sections/PriceTable"
import Section from "../components/Section"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const pravidelny = ({ data, location }) => {
  const path = location.pathname

  return (
    <Layout>
      <SEO title="Pravidelný" />
      <BackgroundSection
        classname="contact__hero-bg"
        image={data.file.childImageSharp.fluid}
      ></BackgroundSection>
      <Section title="Pravidelný" message="služby" classname="prices">
        <PriceTable path={path} />
        <AniLink
          fade
          to="/kontakt"
          className="btn btn--cta btn--call"
          alt="button to kontakt page"
        >
          Zdarma odhad
        </AniLink>
      </Section>
    </Layout>
  )
}

export default pravidelny
export const query = graphql`
  query PraviPageQuery {
    file(relativePath: { eq: "chairs.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 3000) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
