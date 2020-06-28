import React from "react"
import Layout from "../components/Layout"
import BackgroundSection from "../components/BackgroundSection"
import Contact from "../components/Contact"

const kontakt = () => {
  return (
    <Layout>
      <BackgroundSection classname="contact__hero-bg"></BackgroundSection>

      <Contact />
    </Layout>
  )
}

export default kontakt
