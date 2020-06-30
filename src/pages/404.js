import React from "react"
import Layout from "../components/Layout"
import BackgroundSection from "../components/BackgroundSection"
import Banner from "../components/Banner"
import { graphql } from "gatsby"
import SEO from "../components/seo"
const error = ({ data }) => {
  return (
    <Layout>
      <SEO title="Error" />
      <BackgroundSection
        className="error-hero"
        image={data.file.childImageSharp.fluid}
        style={{
          background: "none;",
          opacity: "0;",
        }}
      >
        <Banner text="Cítíš se ztracený?" info="Tato stránka neexistuje">
          <a href="/" className="btn btn--cta" alt="button to úvod">
            Zpět na úvod
          </a>
        </Banner>
      </BackgroundSection>
    </Layout>
  )
}

export default error

export const query = graphql`
  query ErrorPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    file(relativePath: { eq: "question-mark.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
