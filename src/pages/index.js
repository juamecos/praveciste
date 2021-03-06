import React from "react"
import "../styles/main.scss"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import SectionAbout from "../components/Sections/About"
import Satisfaction from "../components/Sections/Satisfaction"
import HowTo from "../components/Sections/HowTo"
import Guarantee from "../components/Sections/Guarantee"
import Testimonials from "../components/Sections/Testimonials"

const Index = ({ data }) => (
  <Layout>
    <SEO title="Úvod" />
    <Hero />
    <SectionAbout />
    <Satisfaction />
    <HowTo />
    <Guarantee />
    <Testimonials />
  </Layout>
)

export default Index

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        logo
        menuLinks {
          name
          link
        }
      }
    }
    hero: file(relativePath: { eq: "girl.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
