import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import BackgroundSection from "../components/BackgroundSection"
import PriceTable from "../components/Sections/PriceTable"
import priceServices from "../constants/prices"
import Section from "../components/Section"
const sluzby = ({ data }) => {
  console.log(priceServices)

  return (
    <Layout>
      <BackgroundSection
        classname="contact__hero-bg"
        image={data.hero.childImageSharp.fluid}
      ></BackgroundSection>
      <Section title="Jednorázové" message="služby" classname="prices">
        <PriceTable />
      </Section>
    </Layout>
  )
}

export default sluzby
export const query = graphql`
  query JednoPageQuery {
    hero: file(relativePath: { eq: "vacuum-cleaner-2.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
